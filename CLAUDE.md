# Rama Muay Thai — Sitio web

Sitio de la escuela **Rama Muay Thai** (Chile). Vue 3 + Vite + Vue Router (hash history) + Tailwind CSS v4.

- Vistas en `src/views/`, layouts (Navbar/Footer) en `src/layouts/`, rutas en `src/router.js`.
- Tokens de color (Tailwind v4 `@theme` en `src/style.css`): `primary`/`accent` = `#FFD700` (dorado), `background-dark` = `#000000`. Fuente display: Lexend.
- Las clases "en desarrollo" usan el componente `src/components/ClaseEnDesarrollo.vue` (prop `nombre`).
- El CTA "Unirse"/"Reservar" usa `openBoxMagic()` de `src/utils/deepLinking.js` (portal BoxMagic).

## Horarios oficiales 2026

Fuente: flyers oficiales @ramamuaythai (HORARIO AM / HORARIO PM 2026). Mantener
`src/views/Horarios.vue` (tablas `horarioAM`/`horarioPM`) y la barra de datos de
`src/views/MuayThaiFormativo.vue` sincronizados con esto.

### AM (Lun a Sáb)

| Hora          | Lun             | Mar             | Mié             | Jue             | Vie             | Sáb                          |
|---------------|-----------------|-----------------|-----------------|-----------------|-----------------|------------------------------|
| 7:00 - 8:00   | MT Formativo    | MT Formativo    | MT Formativo    | MT Formativo    | MT Formativo    | —                            |
| 8:00 - 9:00   | Cross Training  | Cross Training  | Cross Training  | Cross Training  | Cross Training  | —                            |
| 10:00 - 11:00 | Cross Training  | Cross Training  | Cross Training  | Cross Training  | Cross Training  | MT Formativo                 |
| 11:00 - 12:00 | MT Combat       | MT Amateur      | MT Combat       | MT Amateur      | MT Combat       | Woman Muay Thai + Cross Training |
| 12:00 - 13:00 | MT Combat       | MT Amateur      | MT Combat       | MT Amateur      | MT Combat       | MT Amateur                   |

### PM (Lun a Vie)

| Hora          | Lun                        | Mar                        | Mié                        | Jue                        | Vie                        |
|---------------|----------------------------|----------------------------|----------------------------|----------------------------|----------------------------|
| 17:30 - 18:30 | MT Formativo               | MT Amateur                 | MT Formativo               | MT Amateur                 | MT Formativo               |
| 18:30 - 19:30 | MT Amateur + Cross Training | MT Formativo              | MT Amateur + Cross Training | MT Formativo              | MT Amateur + Cross Training |
| 19:30 - 20:30 | MT Formativo               | MT Amateur + Cross Training | MT Formativo              | MT Amateur + Cross Training | MT Combat                  |
| 20:30 - 22:00 | MT Combat                  | Grappling                  | MT Combat                  | Grappling                  | Grappling                  |

(Las clases duran ~1 hora. "X + Y" = dos clases en el mismo bloque horario.)

## Sistema Rama 2026 (catálogo de clases)

| Clase               | Descripción                                   |
|---------------------|-----------------------------------------------|
| Muay Thai Formativo | Fundamento y base técnica del Muay Thai       |
| Muay Thai Amateur   | Entrenamiento y desarrollo deportivo          |
| Muay Thai Combat    | Equipo avanzado, selección por nivel técnico  |
| Cross Training      | Preparación física complementaria             |
| Grappling           | Clase de lucha con base de Jiu-Jitsu          |
| Woman Muay Thai     | Entrenamiento exclusivo para mujeres          |

## Optimización de carga

Aplicado (código):
- **Code splitting en el router** (`src/router.js`): cada vista se importa con `() => import(...)`, así Vite crea un chunk por ruta y el bundle inicial es mínimo. `manualChunks` en `vite.config.js` separa el vendor (vue + vue-router) para que se cachee entre deploys.
- **`vite-plugin-compression`**: pre-comprime los assets del build a `.gz` y `.br` (instalar con `npm install` tras pull — ya está en `package.json`). La mayoría de hosts modernos sirven el `.br`/`.gz` automáticamente.
- **`vite-plugin-pwa`** (Service Worker): cachea JS/CSS/HTML del build + imágenes/videos (runtime CacheFirst) + Google Fonts. La 1ª visita guarda todo; las siguientes cargan casi instantáneas. Auto-update silencioso. **Importante**: PWA solo funciona en HTTPS (en dev no se activa). Idealmente generar íconos cuadrados 192/512 px (hoy reusa `logo_letra_negra.png` que no es cuadrado — para una experiencia PWA "pro", crear `pwa-192x192.png` y `pwa-512x512.png` con [realfavicongenerator.net](https://realfavicongenerator.net) y referenciarlos en `vite.config.js`).
- **`loading="lazy"` + `decoding="async"`** en imágenes below-the-fold (`SeccionesReveal.vue`, fotos de profesores en `Horarios.vue`, `MuayThaiWomen.vue`).
- **`index.html`**: preconnect + dns-prefetch a Google Fonts, Material Symbols cargado asíncrono con `media="print"`+`onload`.

Pendiente (vos lo corrés una vez):
- **`scripts/optimize-media.ps1`**: requiere `ffmpeg` + `magick` (ImageMagick). Re-encodea videos a MP4 H.264 ~1.5 Mbps / 1080p max y comprime JPGs (q78, 1920px max). Hace backup en `public/_original/` antes de tocar. Espera reducir ~370MB → ~50-70MB.
- Después de correrlo, el único `.MOV` en código (`src/views/MuayThaiAmateur.vue` línea ~164, `/amateur/amateur2.MOV`) hay que cambiarlo a `.mp4` (el script convierte la extensión).

## Convenciones

- No correr `npm run build` / `npm run dev`: el dueño ejecuta el dev server y avisa si hay errores.
- **Efecto fundido en TODOS los videos**: cada video del sitio debe llevar gradientes que fundan sus bordes con el fondo negro (`background-dark`), para un look integrado/profesional. Importante: el fundido solo se ve si el video llega hasta el borde — con `object-contain` (que deja franjas negras) hay que extender el gradiente hacia adentro para que caiga sobre la orilla del video, no sobre la franja. Patrón usado para video letterboxed (con franjas): el negro debe ser SÓLIDO sobre la franja y recién desvanecerse dentro de la orilla del video — ej. lateral `linear-gradient(to_right,#000 0%,#000 18%,transparent 38%,transparent 62%,#000 82%,#000 100%)`. Fundido superior `linear-gradient(to_bottom,#000 0%,transparent 15%)`. (Si el video llena el contenedor con `object-cover`, basta `from-background-dark via-transparent to-background-dark`.) Referencia: hero de `MuayThaiFormativo.vue` y panel derecho de `MuayThaiCombat.vue`.
