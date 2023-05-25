import { AuthHandlerParams } from '@storyblok/app-extension-auth'
import { endpointPrefix } from '~/src/endpointPrefix'

// TODO do not cast to `string` with `as`
export const authHandlerParams: AuthHandlerParams = {
  clientId: process.env.CLIENT_ID as string,
  clientSecret: process.env.CLIENT_SECRET as string,
  baseUrl: process.env.BASE_URL as string,
  successCallback: '/',
  errorCallback: '/401',
  endpointPrefix,
}
