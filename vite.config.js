import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import viteCompression from "vite-plugin-compression";
import { VitePWA } from "vite-plugin-pwa";
import { paginas } from "./src/data/seo.js";

// Dominio público del sitio (para sitemap, canonical, Open Graph y datos estructurados).
// - VITE_SITE_URL: si se define (en Vercel → Settings → Environment Variables), manda.
// - VERCEL_PROJECT_PRODUCTION_URL: Vercel la entrega sola en cada build con el dominio de
//   producción (el dominio propio cuando se configure, o el *.vercel.app mientras tanto).
// - En local: localhost.
const SITE_URL = (
    process.env.VITE_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "http://localhost:5173")
).replace(/\/$/, "");

// Reemplaza %SITE_URL% en index.html y genera sitemap.xml + robots.txt en el build
function seo() {
    return {
        name: "rama-seo",
        transformIndexHtml(html) {
            let out = html.replaceAll("%SITE_URL%", SITE_URL);
            // Verificación de dominio en Meta Business (si se configura VITE_META_DOMAIN_VERIFICATION)
            const metaVerif = process.env.VITE_META_DOMAIN_VERIFICATION;
            if (metaVerif) {
                out = out.replace(
                    "</head>",
                    `    <meta name="facebook-domain-verification" content="${metaVerif}" />
  </head>`
                );
            }
            return out;
        },
        generateBundle() {
            const hoy = new Date().toISOString().slice(0, 10);
            const urls = paginas
                .filter((p) => p.prioridad)
                .map(
                    (p) =>
                        `  <url><loc>${SITE_URL}${p.path}</loc><lastmod>${hoy}</lastmod><priority>${p.prioridad}</priority></url>`
                )
                .join("\n");
            this.emitFile({
                type: "asset",
                fileName: "sitemap.xml",
                source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
            });
            this.emitFile({
                type: "asset",
                fileName: "robots.txt",
                source: `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
            });
        },
    };
}

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
        seo(),
        // Pre-comprime los assets a .gz para servirlos directo (la mayoría de hosts modernos lo sirven solo)
        viteCompression({
            algorithm: "gzip",
            ext: ".gz",
            threshold: 1024,
            deleteOriginFile: false,
        }),
        // También a .br (brotli) — pesa aún menos que gzip
        viteCompression({
            algorithm: "brotliCompress",
            ext: ".br",
            threshold: 1024,
            deleteOriginFile: false,
        }),
        // PWA / Service Worker: cachea todo en la primera visita → las siguientes cargan instantáneo
        VitePWA({
            registerType: "autoUpdate",
            includeAssets: ["logo_letra_negra.png"],
            manifest: {
                name: "Rama Muay Thai",
                short_name: "Rama",
                description:
                    "Escuela de Muay Thai en Chile — Formativo, Amateur, Combat, Women, Cross Training y Brazilian Jiu Jitsu.",
                theme_color: "#FFD700",
                background_color: "#000000",
                display: "standalone",
                start_url: "/",
                lang: "es",
                icons: [
                    {
                        src: "/logo_letra_negra.png",
                        sizes: "192x192",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                    {
                        src: "/logo_letra_negra.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                ],
            },
            workbox: {
                // Rutas normales (sin "#"): toda navegación cae en index.html, salvo estos archivos
                navigateFallbackDenylist: [/^\/(?:sitemap\.xml|robots\.txt)$/],
                // Precache: JS/CSS/HTML del build (NO los videos/imágenes — esos van por runtime cache)
                globPatterns: ["**/*.{js,css,html,svg,woff,woff2}"],
                // Workbox por defecto saltea archivos > 2MB; lo subo a 5MB para no romper con chunks de vendor
                maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
                // Caching en runtime para media (se cachea recién cuando el navegador la pide)
                runtimeCaching: [
                    {
                        urlPattern: /\.(?:png|jpg|jpeg|svg|webp|avif|gif)$/i,
                        handler: "CacheFirst",
                        options: {
                            cacheName: "rama-images",
                            expiration: {
                                maxEntries: 80,
                                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 días
                            },
                        },
                    },
                    {
                        urlPattern: /\.(?:mp4|webm|mov)$/i,
                        handler: "CacheFirst",
                        options: {
                            cacheName: "rama-videos",
                            expiration: {
                                maxEntries: 15,
                                maxAgeSeconds: 30 * 24 * 60 * 60,
                            },
                            rangeRequests: true, // necesario para el streaming/seek de <video>
                        },
                    },
                    {
                        urlPattern:
                            /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
                        handler: "CacheFirst",
                        options: {
                            cacheName: "google-fonts",
                            expiration: {
                                maxEntries: 30,
                                maxAgeSeconds: 365 * 24 * 60 * 60, // 1 año
                            },
                        },
                    },
                ],
            },
        }),
    ],
    build: {
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                // Vendor separado: el navegador cachea vue/vue-router entre deploys
                manualChunks: {
                    vue: ["vue", "vue-router"],
                },
            },
        },
    },
});
