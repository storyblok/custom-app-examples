import { AuthHandlerParams } from '@storyblok/app-extension-auth'
import { endpointPrefix } from '~/shared/helpers'

// NOTE: this file is inside server because it reads the environment variables that are only available on server
const isString = (variable: unknown): variable is string =>
  typeof variable === 'string' && variable.length > 0

const getClientId = (): string => {
  if (!isString(process.env.CLIENT_ID)) {
    throw new Error('CLIENT_ID has not been specified')
  }

  return process.env.CLIENT_ID
}

const getClientSecret = (): string => {
  if (!isString(process.env.CLIENT_SECRET)) {
    throw new Error('CLIENT_SECRET has not been specified')
  }

  return process.env.CLIENT_SECRET
}

const getBaseUrl = (): string => {
  if (!isString(process.env.BASE_URL)) {
    throw new Error('BASE_URL has not been specified')
  }

  return process.env.BASE_URL
}

export const authHandlerParams: AuthHandlerParams = {
  clientId: getClientId(),
  clientSecret: getClientSecret(),
  baseUrl: getBaseUrl(),
  successCallback: '/',
  errorCallback: '/401',
  endpointPrefix,
}
