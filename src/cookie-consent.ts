import * as CookieConsent from 'vanilla-cookieconsent';
import { config } from './components/CookieConsentConfig';
import { initGA, grantAnalyticsConsent } from './ga';

document.body.classList.add('cc--elegant-black');

CookieConsent.run(config).then(() => {
  if (!CookieConsent.validConsent()) CookieConsent.show(true);

  if (import.meta.env.PROD) {
    const prefs = CookieConsent.getUserPreferences?.() || {};
    const cats = prefs.acceptedCategories || [];
    const services = Object.values(prefs.acceptedServices || {}).flat();
    if (cats.includes('analytics') || services.includes('ga4')) {
      initGA(import.meta.env.PUBLIC_GA_MEASUREMENT_ID);
      grantAnalyticsConsent();
      (window as any).gtag?.('event', 'page_view', {
        page_location: location.href,
        page_path: location.pathname,
        page_title: document.title,
      });
    }
  }
});
