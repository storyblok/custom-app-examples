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
    <main class="app">
      <template v-if="!result.pending.value && result.data.value">
        <span class="app__text">
          Hello, these are last {{ result.data.value.length }} updated stories
          on this space:
        </span>
        <StoryTable
          class="app_story-table"
          :stories="result.data.value"
        />
      </template>
    </main>
  </NuxtLayout>
</template>

<style scoped>
.app__text {
  color: #8d919f;
}

.app_story-table {
  margin-top: 22px;
}
</style>
