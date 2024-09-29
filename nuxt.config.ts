// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'src/',

  dir: {
    pages: 'routes',
    middleware: 'app/middleware',
  },

  components: {
    dirs: [
      {
        path: '~/widgets',
        pathPrefix: false,
        global: true
      },
      {
        path: '~/shared',
        pathPrefix: false,
        global: true
      },
    ]
  },

  alias: {
    '~assets': "/app/assets",
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/app/assets/styles/main.scss";',
          silenceDeprecations: ['legacy-js-api'],
        }
      }
    }
  },

  css: ['normalize.css'],
  modules: [
    '@nuxt/image',
    '@nuxtjs/device',
    '@pinia/nuxt',
    '@vee-validate/nuxt'
  ],

  veeValidate: {
    autoImports: true,
  },

  image: {
    dir: 'app/assets/images',
    format: ['webp', 'png', 'jpg', 'jpeg'],
  },

  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:5000',
    }
  }
})