<script lang="ts" setup>
import { Story } from '~/src/Story'

defineProps<{
  stories: Story[]
}>()

const formatDate = (date: Date) =>
  date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

const formatTime = (date: Date) =>
  date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
const formattedDate = (date: string) => {
  const parsedDate = new Date(date)
  return `${formatDate(parsedDate)} ${formatTime(parsedDate)}`
}
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th class="table__head-cell">Name</th>
        <th class="table__head-cell">Author</th>
        <th class="table__head-cell">Last update</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="story in stories"
        :key="story.id"
        class="table__table-row"
      >
        <td class="table__data-cell table__data-cell--name">
          <FolderIcon v-if="story.is_folder" />
          <StoryIcon v-else />

          <div class="table__data-cell-name">
            <strong class="table__story-name">{{ story.name }}</strong>
            <span>{{ story.slug }}</span>
          </div>
        </td>
        <td class="table__data-cell">{{ story.last_author.friendly_name }}</td>
        <td class="table__data-cell">
          {{ formattedDate(story.updated_at) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}

.table__head-cell {
  box-sizing: border-box;
  padding: 14px 10px;
  color: #8d919f;
  font-weight: 400;
  line-height: 1.3;
  text-align: left;
}

.table__table-row {
  border-bottom: 1px solid #eff1f3;
}

.table__table-row:last-child {
  border-bottom: 1px solid #fff;
}

.table__data-cell {
  color: #8d919f;
  gap: 20px;
  padding: 14px 10px;
}

.table__data-cell--name {
  display: flex;
  align-items: center;
}

.table__data-cell-name {
  display: flex;
  flex-direction: column;
}

.table__story-name {
  color: #1b243f;
  font-weight: 500;
}
</style>
