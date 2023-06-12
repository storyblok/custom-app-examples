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
  <NuxtLayout>
    <main v-if="!result.pending.value && result.data.value">
      <span class="text-small">
        Hello, these are last {{ result.data.value.length }} updated stories on
        this space:
      </span>
      <StoryTable
        class="story-table"
        :stories="result.data.value"
      />
    </main>
  </NuxtLayout>
</template>

<style scoped>
.text-small {
  color: #8d919f;
}
.story-table {
  padding-top: 22px;
}
</style>
