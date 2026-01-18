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
 * Opens the BoxMagic application or redirects to the student portal/app stores.
 */
export const openBoxMagic = () => {
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
