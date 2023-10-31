export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  ssr: true,
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 3000 // Your preferred port
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/services/bussnies.js', ssr: true }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.API_BASE_URL,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'cache-control': 'no-cache',
        'Content-Type': 'application/json',
        'Accept': '*',
        'accept': 'application/json',
        Authorization: `Bearer ${process.env.API_KEY}`,
      }
    },
    apiKey: process.env.API_KEY,
  },
}
