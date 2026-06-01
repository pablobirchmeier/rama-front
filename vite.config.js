import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import viteCompression from "vite-plugin-compression";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
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
