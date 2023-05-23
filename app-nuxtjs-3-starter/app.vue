<script setup lang="ts">
import { navigateTo } from '#app'
import { initOauthFlowUrl } from '~/src/endpointPrefix'

const route = useRoute()
const { spaceId, userId } = route.query

if (!spaceId || !userId) {
  navigateTo(initOauthFlowUrl)
}
const result = useFetch(() => `/api/stories`, {
  params: {
    spaceId,
    userId,
  },
})
</script>
<template>
  <div v-if="!result.pending">
    <p>
      Hello, these are the first {{ stories.length }} stories on this space:
    </p>
    <Stories :stories="stories" />
  </div>
</template>
