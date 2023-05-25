<script lang="ts" setup>
import { Story } from '~/src/Story'
defineProps<{
  stories: Story[]
}>()
</script>
<template>
  <ul>
    <li
      v-for="story in stories"
      :key="story.id"
    >
      {{ story.is_folder ? '📁' : '📄' }} <strong>{{ story.name }}</strong>
    </li>
  </ul>
</template>
<style></style>
