import { NextApiHandler } from 'next'
import { authHandlerParams } from '@src/auth'
import { isStories, Story } from '@src/Story'
import StoryblokClient from 'storyblok-js-client'
import {
  isAppSessionQuery,
  Region,
  sessionCookieStore,
} from '@storyblok/app-extension-auth'

type StoriesResponse = {
  stories: Story[]
}

const isStoriesResponse = (data: unknown): data is StoriesResponse =>
  typeof data === 'object' && 'stories' in data && isStories(data.stories)

const fetchStories = (
  accessToken: string,
  region: Region,
  spaceId: number,
): Promise<Story[] | Error> =>
  new StoryblokClient({
    oauthToken: `Bearer ${accessToken}`,
    region,
  })
    .get(`spaces/${spaceId.toString(10)}/stories`, {
      sort_by: 'updated_at:desc',
    })
    .then((res) => res.data as unknown)
    .then((data) => (isStoriesResponse(data) ? data.stories : undefined))
    .catch((error) => error)

const handle: NextApiHandler<Story[]> = async (req, res) => {
  try {
    const { query } = req

    if (!isAppSessionQuery(query)) {
      // spaceId and userId are not specified, so it is impossible to know from which space and user the request came from
      res.status(401).end()
      return
    }

    const sessionStore = sessionCookieStore(authHandlerParams)({ req, res })
    const appSession = await sessionStore.get(query)
    if (!appSession) {
      res.status(401).end()
      return
    }

    const { accessToken, region, spaceId } = appSession

    const stories = await fetchStories(accessToken, region, spaceId)

    if (stories instanceof Error) {
      console.error(stories)
      res.status(500).end()
      return
    }

    res.json(stories)
    return
  } catch (error) {
    // Should not happen
    res.status(500).end()
  }
}

export default handle
