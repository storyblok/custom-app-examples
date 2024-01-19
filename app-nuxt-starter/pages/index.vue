<script setup>
import { useFetch, useRoute } from '#app'
import StoryTable from '~/components/StoryTable.vue'

const route = useRoute()
const { spaceId, userId } = route.query

const result = await useFetch(() => `/api/stories`, {
  params: {
    spaceId,
    userId,
  },
})
</script>

<template>
  <div
    v-if="!result.pending.value && result.data.value"
    class="app"
  >
    <span class="app__text">
      Here is a list of the last {{ result.data.value.length }} updated stories
      on this space:
    </span>
    <StoryTable
      class="app__story-table"
      :stories="result.data.value"
    />
  </div>
</template>

<style scoped>
.app {
  flex: 1;
}

.app__text {
  color: #8d919f;
}

.app__story-table {
  margin-top: 22px;
}
</style>
