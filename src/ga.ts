// ga.ts
let gaLoaded = false;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function initGA(measurementId: string) {
  if (gaLoaded || !measurementId) return;
  gaLoaded = true;

  window.dataLayer = window.dataLayer || [];
  // WICHTIG: kein Arrow-Function, damit `arguments` korrekt ist
  const gtag = function (..._args: unknown[]) {
    // wie im offiziellen Snippet: arguments in die dataLayer pushen
    (window as any).dataLayer.push(arguments);
  };
  window.gtag = gtag;

  // Consent default (alles denied außer security)
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted',
  });

  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(s);

  window.gtag('js', new Date());
  window.gtag('config', measurementId, { anonymize_ip: true });
}

export function grantAnalyticsConsent() {
  window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
}

export function denyAnalyticsConsent() {
  window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
}
