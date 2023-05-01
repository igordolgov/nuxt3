// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-swiper',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
  ],
  runtimeConfig: {
    public: {
      appUrl: 'http://localhost:3000',
      stripePk: 'pk_test_xxxxxxxxxxxxxxxxxxxxxx',
    },
  },
})