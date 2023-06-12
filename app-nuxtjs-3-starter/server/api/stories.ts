import {
  isAppSessionQuery,
  sessionCookieStore,
} from '@storyblok/app-extension-auth'
import { H3Event } from 'h3'
import { authHandlerParams } from '~/src/auth'
import { fetchStories } from '~/src/server/fetchStories'
import { Story } from '~/src/Story'

export default defineEventHandler<Story[]>(async (event) => {
  const query = getQuery(event)
  if (!isAppSessionQuery(query)) {
    throw createError({
      statusCode: 401,
      statusMessage: 'spaceId and userId query parameters are required',
    })
  }

  const sessionStore = sessionCookieStore(authHandlerParams)(
    requestParams(event),
  )
  const appSession = await sessionStore.get(query)
  if (!appSession) {
    throw createError({
      statusCode: 401,
      statusMessage: 'auth cookie not present',
    })
  }
  const { accessToken, region, spaceId } = appSession
  const stories = await fetchStories(accessToken, region, spaceId)

  if (stories instanceof Error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'failed to fetch stories',
    })
  }

  return stories
})

const requestParams = (event: H3Event) => ({
  req: event.node.req,
  res: event.node.res,
})
