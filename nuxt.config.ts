// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'src/',

  dir: {
    pages: 'routes'
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
          additionalData: '@import "~assets/styles/main.scss";',
        }
      }
    }
  },

  css: ['normalize.css'],
  modules: ['@nuxt/image'],

  image: {
    dir: 'app/assets/images',
  }
})