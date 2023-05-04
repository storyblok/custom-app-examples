import {AuthHandlerParams} from '@storyblok/app-extension-auth'

export const endpointPrefix = '/api/authenticate'

export const authHandlerParams: AuthHandlerParams = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  baseUrl: process.env.BASE_URL,
  successCallback: '/',
  errorCallback: '/401',
  endpointPrefix,
  // Increase the scope if needed
  scope: [
    'read_content',
    // 'write_content',
  ],
}
