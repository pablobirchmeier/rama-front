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
  const webUrl = 'https://boxmagic.cl/student';
  
  // BoxMagic common schemes and android intent
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isAndroid) {
    // Android Intent for BoxMagic
    const intentUri = 'intent://#Intent;scheme=boxmagic;package=app.boxmagic.cl;end';
    openApp(intentUri, webUrl);
  } else if (isIOS) {
    // iOS Custom Scheme
    const appUri = 'boxmagic://';
    openApp(appUri, webUrl);
  } else {
    // Desktop: directly to web
    window.open(webUrl, '_blank');
  }
};
