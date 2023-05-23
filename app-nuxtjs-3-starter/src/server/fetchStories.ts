import { Region } from '@storyblok/app-extension-auth'
import StoryblokClient from 'storyblok-js-client'
import { isStories, Story } from '~/src/Story'

type StoriesResponse = {
  stories: Story[]
}

const isStoriesResponse = (data: unknown): data is StoriesResponse =>
  typeof data === 'object' &&
  data !== null &&
  'stories' in data &&
  isStories(data.stories)

export const fetchStories = (
  accessToken: string,
  region: Region,
  spaceId: number,
): Promise<Story[] | Error> =>
  new StoryblokClient({
    oauthToken: `Bearer ${accessToken}`,
    region,
  })
    .get(`spaces/${spaceId.toString(10)}/stories`)
    .then((res) => res.data as unknown)
    .then((data) => (isStoriesResponse(data) ? data.stories : undefined))
    .catch((error) => error)
