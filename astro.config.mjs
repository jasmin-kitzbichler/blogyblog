// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],

	//Spracheinstellungne
	i18n: {
		locales: ["de", "en"],
		defaultLocale: "de",
		fallback: {
			en: "de"
		  },
		  routing: {
			fallbackType: "rewrite"
		  }
	  }
});
