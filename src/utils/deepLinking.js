import { ref } from 'vue';

/**
 * Utility for opening mobile applications with a fallback to web version.
 */

export const openApp = (appUri, webUrl) => {
  const start = Date.now();
  window.location.href = appUri;
  setTimeout(() => {
    if (Date.now() - start < 1500) {
      window.open(webUrl, '_blank');
    }
  }, 1000);
};

export const openInstagram = () => {
  const username = 'ramamuaythaichile';
  const webUrl = `https://www.instagram.com/${username}/`;
  const appUri = `instagram://user?username=${username}`;
  openApp(appUri, webUrl);
};

export const openFacebook = () => {
  const pageId = '304525552948189';
  const webUrl = 'https://web.facebook.com/RamaMuayThaiCL';
  const appUri = `fb://page/${pageId}`;
  openApp(appUri, webUrl);
};

/**
 * Todos los CTA de reserva llaman a openBoxMagic(): primero se muestra el modal
 * explicativo (BoxMagicModal.vue, montado en App.vue) y recién desde su botón
 * "Ir a BoxMagic" se redirige con irABoxMagic().
 */
export const boxMagicModalAbierto = ref(false);

export const openBoxMagic = () => {
  boxMagicModalAbierto.value = true;
};

/**
 * Opens the BoxMagic application or redirects to the student portal/app stores.
 */
export const irABoxMagic = () => {
  const webUrl = 'https://members.boxmagic.app/a/g?o=pi-e';
  
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isAndroid) {
    // Intent más agresivo para Android para forzar apertura de app
    const intentUri = `intent://members.boxmagic.app/a/g?o=pi-e#Intent;scheme=https;package=app.boxmagic.members;end`;
    window.location.href = intentUri;
  } else if (isIOS) {
    // En iPhone intentamos forzar el esquema directo de la app (si existe)
    // El bundle ID suele ser el esquema por defecto en muchas apps
    const start = Date.now();
    window.location.href = 'app.boxmagic.members://';
    
    // Si en 1 segundo no detectamos que se abrió la app (el timer sigue corriendo), vamos a la web
    setTimeout(() => {
      if (Date.now() - start < 1500) {
        window.location.href = webUrl;
      }
    }, 1000);
  } else {
    // Desktop: directamente a web
    window.open(webUrl, '_blank');
  }
};


/**
 * WhatsApp de la escuela.
 */
export const WHATSAPP_NUMBER = '56984445002';

export const openWhatsApp = (mensaje = 'Hola Rama! Quiero información para empezar a entrenar.') => {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`, '_blank');
};

export const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Tegualda+1895,+%C3%91u%C3%B1oa,+Santiago';
