import tailwindcss from '@tailwindcss/vite'
// import { pwa } from './app/config/pwa'
import { appDescription } from './app/constants/index'

export default defineNuxtConfig({

  modules: [
    'shadcn-nuxt',
    '@vueuse/nuxt',
    // '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    // '@vite-pwa/nuxt',
    '@nuxt/eslint',
    ['unplugin-icons/nuxt', { /* options */ }],
  ],
  ssr: false,
  components: {
    dirs: [
      {
        path: '~/components/global',
        global: true,
      },
      {
        path: '~/components/ui',
        ignore: ['**/*.ts'], // 忽略 TypeScript 文件的自动导入
      },
      '~/components',
    ],
  },

  devtools: {
    enabled: true,
  },
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],

  colorMode: {
    classSuffix: '',
  },
  devServer: {
    port: 6580,
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  compatibilityDate: '2024-08-14',

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },

  // pwa,
})
