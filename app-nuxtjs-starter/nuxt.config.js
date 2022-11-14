require('dotenv').config()

export default {
  ssr: true,
  target: 'server',

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dotenv',
  ],
}
