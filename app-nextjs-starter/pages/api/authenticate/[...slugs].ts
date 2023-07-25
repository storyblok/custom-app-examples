import { authHandler } from '@storyblok/app-extension-auth'
import { authHandlerParams } from '@src/auth'

// Disable false warnings
export const config = {
  api: {
    externalResolver: true,
  },
}

export default authHandler(authHandlerParams)
