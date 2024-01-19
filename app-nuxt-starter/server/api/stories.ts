import type { Story } from '~/shared/types'
import { fetchStories } from '~/shared/helpers'

export default defineEventHandler<Promise<Story[]>>(async (event) => {
  const { accessToken, region, spaceId } = event.context.appSession
  const stories = await fetchStories(accessToken, region, spaceId)

  if (stories instanceof Error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'failed to fetch stories',
    })
  }

  return stories
})
