/**
 * Píxel de Meta (publicidad en Instagram / Facebook).
 *
 * Se activa solo si existe la variable de entorno VITE_META_PIXEL_ID
 * (Vercel → Settings → Environment Variables, luego redeploy). Sin ID no carga nada.
 *
 * Eventos que envía el sitio:
 *   PageView     → cada cambio de página (router.afterEach)
 *   ViewContent  → páginas de clases y planes (router.afterEach)
 *   Schedule     → botón "Ir a BoxMagic" del modal (irABoxMagic)
 *   Contact      → cualquier botón que abre WhatsApp (openWhatsApp)
 *
 * Aviso de cookies (pendiente): cuando exista, poner REQUIERE_CONSENTIMIENTO = true y
 * llamar a setMetaConsent(true/false) desde el aviso según lo que elija el visitante.
 */

const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;
const REQUIERE_CONSENTIMIENTO = false;

export const metaPixelActivo = Boolean(PIXEL_ID);

export function initMetaPixel() {
  if (!PIXEL_ID || window.fbq) return;

  // Código base oficial de Meta (equivalente al snippet de Events Manager)
  const fbq = function (...args) {
    fbq.callMethod ? fbq.callMethod(...args) : fbq.queue.push(args);
  };
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [];
  window.fbq = fbq;
  window._fbq = fbq;

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(script);

  if (REQUIERE_CONSENTIMIENTO) window.fbq('consent', 'revoke');
  window.fbq('init', PIXEL_ID);
  // El PageView inicial lo manda el router en su primer afterEach (no aquí, para no duplicarlo)
}

export function trackMeta(evento, params) {
  if (!window.fbq) return;
  params ? window.fbq('track', evento, params) : window.fbq('track', evento);
}

// Para el futuro aviso de cookies
export function setMetaConsent(aceptado) {
  if (!window.fbq) return;
  window.fbq('consent', aceptado ? 'grant' : 'revoke');
}
