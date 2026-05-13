export default defineNuxtConfig({
  compatibilityDate: '2026-05-13',
  srcDir: 'src/',
  devtools: { enabled: true },
  components: [
    {
      path: '~/components/public',
      pathPrefix: false
    }
  ],
  modules: ['@nuxt/ui', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
  routeRules: {
    '/**': { prerender: true }
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'ahtech-locale',
      redirectOn: 'root'
    },
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'vi', iso: 'vi-VN', name: 'Tieng Viet' }
    ]
  },
  app: {
    head: {
      title: 'AHTECH',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap' }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'AHTECH bilingual static website built with Nuxt 4 and Nuxt UI.'
        }
      ]
    }
  }
})