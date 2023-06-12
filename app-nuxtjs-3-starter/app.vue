<script setup lang="ts">
import { navigateTo, useFetch, useRoute } from '#app'
import { initOauthFlowUrl } from '~/src/endpointPrefix'
import StoryTable from '~/components/StoryTable.vue'

const route = useRoute()
const { spaceId, userId } = route.query

if (!spaceId || !userId) {
  navigateTo(initOauthFlowUrl)
}
const result = await useFetch(() => `/api/stories`, {
  params: {
    spaceId,
    userId,
  },
})
</script>
<template>
  <div v-if="!result.pending.value">
    <p>
      Hello, these are the first {{ result.data.length }} stories on this space:
    </p>
    <StoryTable :stories="result.data.value" />
  </div>
</template>
