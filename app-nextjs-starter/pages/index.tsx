import {GetServerSideProps, NextPage} from "next";
import {isAppSessionQuery, Region, sessionCookieStore} from "@storyblok/app-extension-auth";
import {authHandlerParams, endpointPrefix} from "@src/auth";
import {Layout} from "@src/components/Layout";
import {useEffect, useState} from "react";
import {Stories} from "@src/components/Stories";
import {isStories, Story} from "@src/Story";

type PageProps = {
  userName: string
  region: Region
  spaceName: string
  spaceId: number
  userId: number
}

const fetchStories = (spaceId: number, userId: number): Promise<Story[]> => (
  fetch(`api/stories?spaceId=${spaceId}&userId=${userId}`)
    .then((res) => res.json())
    .then((res) => isStories(res) ? res : [])
    .catch(error => {
      console.error('Failed to fetch stories', error)
      return []
    })
)

const Home: NextPage<PageProps> = (props) => {
  const [stories, setStories] = useState<Story[]>([])

  useEffect(() => {
    fetchStories(props.spaceId, props.userId)
      .then(stories => setStories(stories))
  }, [props.spaceId, props.userId])

  return (
    <Layout>
      <p>
        Hello {props.userName} 👋
      </p>
      <p>
        This is a <em>{props.region}</em> space.
      </p>
      <p>
        These are the first {stories.length} stories on the {props.spaceName} space:
      </p>
      <Stories stories={stories}/>
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

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  const {query} = context

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
      userName: appSession.userName,
      spaceName: appSession.spaceName,
      spaceId: appSession.spaceId,
      region: appSession.region,
      userId: appSession.userId,
    }
  }
}
