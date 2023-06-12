<script lang="ts" setup>
import { Story } from '~/src/Story'
defineProps<{
  stories: Story[]
}>()
</script>
<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="story in stories"
        :key="story.id"
      >
        <td>
          {{ story.is_folder ? '📁' : '📄' }} <strong>{{ story.name }}</strong>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<style></style>
