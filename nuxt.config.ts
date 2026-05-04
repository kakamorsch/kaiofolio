export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
    preset: 'vercel'
  },
  app: {
    head: {
      title: 'KAIO MORSCH // SENIOR SOFTWARE ENGINEER',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Senior Software Engineer | Distributed Systems & Financial Tech | Go, Bun, Vue/Nuxt' }
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