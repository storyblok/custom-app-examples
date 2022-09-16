import {GetServerSideProps, NextPage} from "next";
import {isAppSessionQuery, sessionCookieStore} from "@storyblok/app-extension-auth";
import {authHandlerParams, endpointPrefix} from "@src/auth";
import {Layout} from "@src/components/Layout";
import {useEffect, useState} from "react";
import {Stories} from "@src/components/Stories";

type PageProps = {
  userName: string
  spaceName: string
  spaceId: number
  userId: number
}

const fetchStories = (spaceId: number, userId: number): Promise<any[]> => (
  fetch(`api/stories?spaceId=${spaceId}&userId=${userId}`)
    .then(res => res.json())
    .then(stories => {
      console.log('Fetched stories', stories)
      return stories
    })
    .catch(error => {
      console.error(error)
      return []
    })
)

const Home: NextPage<PageProps> = (props) => {
  const [stories, setStories] = useState<any[]>([])

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
        There are the first {stories.length} stories on the {props.spaceName} space:
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
      userId: appSession.userId,
    }
  }
}
