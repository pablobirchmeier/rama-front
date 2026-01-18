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
  
  // BoxMagic Members configuration
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isAndroid) {
    // Correct Android Intent for BoxMagic Members
    // Note: The package name is 'app.boxmagic.members'
    const intentUri = `intent://members.boxmagic.app/a/g?o=pi-e#Intent;scheme=https;package=app.boxmagic.members;end`;
    openApp(intentUri, webUrl);
  } else if (isIOS) {
    // iOS Universal Link
    // If installed, iOS will intercept this URL and open the app automatically.
    window.location.href = webUrl;
  } else {
    // Desktop: directly to web
    window.open(webUrl, '_blank');
  }
};
