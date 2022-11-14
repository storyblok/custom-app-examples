<template>
      <Layout>
        <p v-if="$fetchState.pending">Fetching mountains...</p>
        <p v-else-if="$fetchState.error">An error occurred :(</p>
        <div v-else>
          <p>
            Hello {{userName}} 👋
          </p>
          <p>
            There are the first {{stories.length}} stories on the {{props.spaceName}} space:
          </p>
          <Stories stories={stories} />
        </div>
    </Layout>
</template>

<script>
import {isAppSessionQuery, sessionCookieStore} from "@storyblok/app-extension-auth";
import {authHandlerParams, endpointPrefix} from "../auth";

export default {
  data() {
    return {
      userName  :undefined,
      stories   :undefined,
      spaceName :undefined,
      spaceId   :undefined,
      userId    :undefined,
    }
  },

  methods: {
    fetchStories(spaceId, userId){
      fetch(`api/stories?spaceId=${spaceId}&userId=${userId}`)
        .then(res => res.json())
        .then(stories => stories)
        .catch(error => {
          console.error(error)
          return []
        })
      }
  },

  async fetch(context) {
    const {redirect, query} = context

    if (!isAppSessionQuery(query)) {
      return {
        redirect: {
          permanent: false,
          destination: `${endpointPrefix}/storyblok`,
        },
      }
    }

    const sessionStore = sessionCookieStore(authHandlerParams)(context)
    const appSession = await sessionStore.get(query)
    if (!appSession) {
      return {
        redirect: {
          permanent: false,
          destination: `${endpointPrefix}/storyblok`,
        },
      }
    } else {
      this.userName = appSession.userName
      this.spaceName = appSession.spaceName
      this.spaceId = appSession.spaceId
      this.userId = appSession.userId
    }

    fetchStories(this.spaceId, this.userId)
      .then(stories => this.stories = stories)
  }
}
</script>