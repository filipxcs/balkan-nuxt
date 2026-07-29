// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss'
  ],

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://balkan-constructions.gr',
    name: 'Balkan Constructions',
    defaultLocale: 'el'
  },

  app: {
    head: {
      titleTemplate: '%s · Balkan Constructions',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap'
        }
      ]
    }
  },

  i18n: {
    locales: [
      { code: 'el', iso: 'el-GR', name: 'Ελληνικά', file: 'el.json' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' }
    ],
    langDir: 'locales/',
    defaultLocale: 'el',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'balkan_i18n',
      redirectOn: 'root'
    }
  },

  content: {
    highlight: false
  },

  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            navy: {
              950: '#070c16',
              900: '#0b1526',
              800: '#101c33',
              700: '#182a48'
            },
            steel: {
              500: '#3b6ea5',
              400: '#5688bd'
            },
            copper: {
              500: '#c97c3d',
              400: '#e2a35e',
              300: '#eec089'
            },
            bone: '#f5f3ee'
          },
          fontFamily: {
            display: ['"Space Grotesk"', 'sans-serif'],
            body: ['"Inter"', 'sans-serif'],
            mono: ['"IBM Plex Mono"', 'monospace']
          }
        }
      }
    }
  }
})
