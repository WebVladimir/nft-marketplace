// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'src/',
  dir: {
    pages: 'routes',
    assets: 'app/assets',
  },
  alias: {
    '~assets': '@/app/assets',
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
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/app/assets/styles/main.scss";',
        }
      }
    }
  },
  css: ['normalize.css'],
})
