// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  // SEO and Performance Optimizations
  app: {
    head: {
      htmlAttrs: {
        lang: 'cs'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Videre 2 | Oční klinika Praha 7 - Profesionální péče o zrak',
      meta: [
        {
          name: 'description',
          content: 'Videre 2 - Oční klinika v Praze 7. Komplexní oční vyšetření, diagnostika, léčba katarakty a glaukomu. Moderní technologie OCT, perimetr. Strossmayerovo nám. 977/2.'
        },
        {
          name: 'keywords',
          content: 'oční klinika praha 7, oční lékař strossmayerovo, vyšetření zraku praha, OCT vyšetření, perimetr, glaukom, katarakta, kontaktní čočky, brýlová korekce, oční diagnostika, Videre 2'
        },
        {
          name: 'author',
          content: 'Videre II s.r.o.'
        },
        {
          name: 'robots',
          content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Videre 2 | Oční klinika Praha 7 - Profesionální péče o zrak' },
        { property: 'og:description', content: 'Komplexní oční vyšetření a diagnostika s moderními technologiemi v Praze 7.' },
        { property: 'og:url', content: 'https://www.videre2.cz' },
        { property: 'og:site_name', content: 'Videre 2' },
        { property: 'og:locale', content: 'cs_CZ' },
        { property: 'og:image', content: 'https://www.videre2.cz/images/preview.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Videre 2 - Oční klinika Praha 7' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Videre 2 | Oční klinika Praha 7' },
        { name: 'twitter:description', content: 'Komplexní oční vyšetření a diagnostika s moderními technologiemi' },
        { name: 'twitter:image', content: 'https://www.videre2.cz/images/preview.png' },
        // Local Business
        { name: 'geo.region', content: 'CZ-PR' },
        { name: 'geo.placename', content: 'Praha 7' },
        { name: 'geo.position', content: '50.0994;14.4329' },
        { name: 'ICBM', content: '50.0994, 14.4329' }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.videre2.cz/' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://maps.google.com' },
        { rel: 'dns-prefetch', href: 'https://maps.googleapis.com' }
      ]
    }
  },

  // Performance optimizations
  nitro: {
    compressPublicAssets: true,
    minify: true
  },

  // CSS optimization
  css: [],

  // Build optimizations
  build: {
    transpile: []
  },

  // Runtime config for environment variables
  runtimeConfig: {
    public: {
      siteUrl: 'https://www.videre2.cz',
      siteName: 'Videre 2',
      siteDescription: 'Oční klinika v Praze 7 s profesionální péčí o zrak'
    }
  },

  // Experimental features for better performance
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true
  }
})
