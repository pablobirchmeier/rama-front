# Optimiza videos e imagenes de public/ -- reencode + recompress in-place.
# Requiere: ffmpeg (https://ffmpeg.org) y magick (ImageMagick).
#
# Uso:  powershell -ExecutionPolicy Bypass -File scripts/optimize-media.ps1
#
# Hace una copia de seguridad en public/_original/ antes de tocar nada.

param(
    [string]$PublicDir = "public",
    [string]$BackupDir = "public/_original",
    [int]$VideoBitrateK = 1500,
    [int]$VideoMaxHeight = 1080,
    [int]$JpegQuality = 78,
    [int]$JpegMaxWidth = 1920
)

$ErrorActionPreference = "Stop"

function Test-Command($cmd) {
    return $null -ne (Get-Command $cmd -ErrorAction SilentlyContinue)
}

if (-not (Test-Command "ffmpeg")) {
    Write-Host "ERROR: ffmpeg no esta instalado. Bajalo de https://ffmpeg.org/download.html" -ForegroundColor Red
    exit 1
}
if (-not (Test-Command "magick")) {
    Write-Host "ERROR: ImageMagick no esta instalado. Bajalo de https://imagemagick.org/script/download.php" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path $BackupDir)) {
    New-Item -ItemType Directory -Force -Path $BackupDir | Out-Null
    Write-Host "Backup en: $BackupDir" -ForegroundColor Cyan
}

# --- VIDEOS ---
Write-Host ""
Write-Host "=== Videos ===" -ForegroundColor Yellow
$videos = Get-ChildItem -Path $PublicDir -Recurse -Include *.mp4, *.MOV, *.mov |
    Where-Object { $_.FullName -notlike "*\_original\*" }

foreach ($v in $videos) {
    $relPath = $v.FullName.Substring((Resolve-Path $PublicDir).Path.Length + 1)
    $backupPath = Join-Path $BackupDir $relPath
    $backupParent = Split-Path $backupPath -Parent
    if (-not (Test-Path $backupParent)) { New-Item -ItemType Directory -Force -Path $backupParent | Out-Null }

    if (-not (Test-Path $backupPath)) {
        Copy-Item $v.FullName $backupPath
    }

    $outPath = [System.IO.Path]::ChangeExtension($v.FullName, ".mp4")
    $tmpPath = "$outPath.tmp.mp4"

    $sizeBefore = [math]::Round($v.Length / 1MB, 1)
    Write-Host ("  > {0} ({1} MB) -> " -f $relPath, $sizeBefore) -NoNewline

    $maxWidth = [int]($VideoMaxHeight * 16 / 9)
    $maxrateK = [int]($VideoBitrateK * 1.5)
    $bufsizeK = [int]($VideoBitrateK * 2)

    & ffmpeg -y -hide_banner -loglevel error -i $v.FullName `
        -c:v libx264 -preset slow -crf 24 -b:v "${VideoBitrateK}k" -maxrate "${maxrateK}k" -bufsize "${bufsizeK}k" `
        -vf "scale='min($maxWidth,iw)':-2" `
        -movflags +faststart -an `
        $tmpPath

    if ($LASTEXITCODE -eq 0 -and (Test-Path $tmpPath)) {
        if ($v.FullName -ne $outPath) { Remove-Item $v.FullName }
        Move-Item -Force $tmpPath $outPath
        $sizeAfter = [math]::Round((Get-Item $outPath).Length / 1MB, 1)
        $saved = [math]::Round((1 - $sizeAfter / $sizeBefore) * 100, 0)
        Write-Host ("{0} MB (-{1}%)" -f $sizeAfter, $saved) -ForegroundColor Green
    } else {
        Write-Host "FALLO" -ForegroundColor Red
        if (Test-Path $tmpPath) { Remove-Item $tmpPath }
    }
}

# --- IMAGENES JPG ---
Write-Host ""
Write-Host "=== JPGs ===" -ForegroundColor Yellow
$imgs = Get-ChildItem -Path $PublicDir -Recurse -Include *.jpg, *.jpeg, *.JPG, *.JPEG |
    Where-Object { $_.FullName -notlike "*\_original\*" }

foreach ($img in $imgs) {
    $relPath = $img.FullName.Substring((Resolve-Path $PublicDir).Path.Length + 1)
    $backupPath = Join-Path $BackupDir $relPath
    $backupParent = Split-Path $backupPath -Parent
    if (-not (Test-Path $backupParent)) { New-Item -ItemType Directory -Force -Path $backupParent | Out-Null }

    if (-not (Test-Path $backupPath)) {
        Copy-Item $img.FullName $backupPath
    }

    $sizeBefore = [math]::Round($img.Length / 1KB, 0)
    Write-Host ("  > {0} ({1} KB) -> " -f $relPath, $sizeBefore) -NoNewline

    & magick $img.FullName `
        -auto-orient `
        -strip `
        -resize "${JpegMaxWidth}x>" `
        -quality $JpegQuality `
        -sampling-factor 4:2:0 `
        -interlace JPEG `
        $img.FullName

    if ($LASTEXITCODE -eq 0) {
        $sizeAfter = [math]::Round((Get-Item $img.FullName).Length / 1KB, 0)
        $saved = [math]::Round((1 - $sizeAfter / $sizeBefore) * 100, 0)
        Write-Host ("{0} KB (-{1}%)" -f $sizeAfter, $saved) -ForegroundColor Green
    } else {
        Write-Host "FALLO" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Listo. Original respaldado en $BackupDir (se puede borrar despues de probar)." -ForegroundColor Cyan
Write-Host "Si algun .MOV fue convertido a .mp4, actualiza las referencias en el codigo." -ForegroundColor Yellow
