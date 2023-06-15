import { authHandler } from '@storyblok/app-extension-auth'

export default defineEventHandler((event) =>
  authHandler(authHandlerParams)(event.node.req, event.node.res),
)
