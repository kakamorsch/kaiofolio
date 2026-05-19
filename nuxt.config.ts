export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'pt',
    locales: [
      { code: 'pt', name: 'Português', file: 'pt.ts' },
      { code: 'en', name: 'English', file: 'en.ts' },
      { code: 'ja', name: '日本語', file: 'ja.ts' },
    ],
    langDir: 'locales/',
    restructureDir: false,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      redirectOn: 'root',
    },
  },
  nitro: {
    preset: 'vercel'
  },
  app: {
    head: {
      titleTemplate: '%s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Kaio Morsch' },
        { name: 'theme-color', content: '#00f0ff' },
        { property: 'og:site_name', content: 'Kaio Morsch Portfolio' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap' }
      ]
    }
  },
  compatibilityDate: '2024-11-01'
})
