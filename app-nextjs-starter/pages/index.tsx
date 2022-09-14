import {GetServerSideProps, NextPage} from "next";
import {isAppSessionQuery, sessionCookieStore} from "@storyblok/app-extension-auth";
import {authHandlerParams, endpointPrefix} from "@src/auth";
import {Layout} from "@src/components/Layout";

type PageProps = {
  userName: string
}

const Home: NextPage<PageProps> = (props) => (
  <Layout>
    <p>
      Hello {props.userName} 👋
    </p>
  </Layout>
)

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
    }
  }
}
