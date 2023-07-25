import { GetServerSideProps, NextPage } from 'next'
import { authHandlerParams, endpointPrefix } from '@src/auth'
import { Layout } from '@src/components/Layout'
import { useEffect, useState } from 'react'
import { StoryTable } from '@src/components/StoryTable'
import { isStories, Story } from '@src/Story'
import {
  isAppSessionQuery,
  sessionCookieStore,
} from '@storyblok/app-extension-auth'
import styles from '@src/styles/Index.module.css'

type PageProps = {
  spaceId: number
  userId: number
}

const fetchStories = (spaceId: number, userId: number): Promise<Story[]> =>
  fetch(`api/stories?spaceId=${spaceId}&userId=${userId}`)
    .then((res) => res.json())
    .then((res) => (isStories(res) ? res : []))
    .catch((error) => {
      console.error('Failed to fetch stories', error)
      return []
    })

const Home: NextPage<PageProps> = (props) => {
  const [stories, setStories] = useState<Story[]>([])

  useEffect(() => {
    fetchStories(props.spaceId, props.userId).then((stories) =>
      setStories(stories),
    )
  }, [props.spaceId, props.userId])

  return (
    <Layout>
      <div className={styles.app}>
        <span className={styles.app__text}>
          Here is a list of the last {stories.length} updated stories on this
          space:
        </span>
        <StoryTable
          stories={stories}
          className={styles['app__story-table']}
        />
      </div>
    </Layout>
  )
}
export default Home

export const initAuthFlow = {
  redirect: {
    permanent: false,
    destination: `${endpointPrefix}/storyblok`,
  },
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context,
) => {
  const { query } = context

  if (!isAppSessionQuery(query)) {
    return initAuthFlow
  }

  const sessionStore = sessionCookieStore(authHandlerParams)(context)
  const appSession = await sessionStore.get(query)

  if (!appSession) {
    return initAuthFlow
  }

  return {
    props: {
      spaceId: appSession.spaceId,
      userId: appSession.userId,
    },
  }
}
