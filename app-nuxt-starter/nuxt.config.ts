// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  // extends: ['../app-nuxt-base'],
  extends: ['github:storyblok/custom-app-examples/app-nuxt-base'],
  css: [resolve('./assets/main.css')],
})
