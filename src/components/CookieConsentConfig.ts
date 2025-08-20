import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'cloud inline',
      position: 'bottom middle',
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
    analytics: {
      services: {
        ga4: {
          label:
            '<a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank">Google Analytics 4 (dummy)</a>',
          onAccept: () => {
            console.log('ga4 accepted');
            // TODO: load ga4
          },
          onReject: () => {
            console.log('ga4 rejected');
          },
          cookies: [
            { name: /^_ga/ },
            { name: /^_gid/ },
            { name: /^_gat/ },
          ],
        },
      },
    },
  },
  language: {
    default: 'en',
    autoDetect: 'browser',
    translations: {
      de: {
        consentModal: {
          title: 'Wir verwenden Cookies 🍪',
          description:
            'Diese Website verwendet Cookies zur Analyse des Besucherverhaltens mit Google Analytics. Du kannst alle Cookies akzeptieren oder deine Präferenzen verwalten.',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Nur notwendige',
          showPreferencesBtn: 'Einstellungen',
          footer:
            '<a href="/privacy">Datenschutzerklärung</a>',
        },
        preferencesModal: {
          title: 'Datenschutzeinstellungen',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Nur notwendige',
          savePreferencesBtn: 'Einstellungen speichern',
          closeIconLabel: 'Schließen',
          serviceCounterLabel: 'Dienst|Dienste',
          sections: [
            {
              title: 'Verwendung von Cookies',
              description:
                'Wir verwenden Cookies, um die Nutzung der Website zu analysieren und dir eine bessere Nutzererfahrung zu bieten.',
            },
            {
              title: 'Unbedingt erforderliche Cookies <span class="pm__badge">Immer aktiv</span>',
              description:
                'Diese Cookies sind notwendig, damit die Website funktioniert und können nicht deaktiviert werden.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Analyse-Cookies',
              description:
                'Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen, um sie laufend zu verbessern.',
              linkedCategory: 'analytics',
            },
            {
              title: 'Mehr Informationen',
              description:
                'Bei Fragen besuche bitte unsere <a href="/privacy">Datenschutzerklärung</a>.',
            },
          ],
        },
      },
      en: {
        consentModal: {
          title: 'We use cookies 🍪',
          description:
            'This website uses cookies to analyze traffic via Google Analytics. You can accept all cookies or manage your preferences.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Only necessary',
          showPreferencesBtn: 'Preferences',
          footer:
            '<a href="/en/privacy">Privacy Policy</a>',
        },
        preferencesModal: {
          title: 'Privacy Settings',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Only necessary',
          savePreferencesBtn: 'Save settings',
          closeIconLabel: 'Close modal',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title: 'Cookie Usage',
              description:
                'We use cookies to analyze the use of this website and improve your experience.',
            },
            {
              title: 'Strictly Necessary Cookies <span class="pm__badge">Always Active</span>',
              description:
                'These cookies are essential for the website to function properly and cannot be disabled.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Analytics Cookies',
              description:
                'These cookies help us understand how visitors use our site, so we can improve it.',
              linkedCategory: 'analytics',
            },
            {
              title: 'More information',
              description:
                'For questions, please see our <a href="/en/privacy">Privacy Policy</a>.',
            },
          ],
        },
      },
    },
  },
};
