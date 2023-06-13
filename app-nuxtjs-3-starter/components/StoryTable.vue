<script lang="ts" setup>
import { Story } from '~/src/Story'

defineProps<{
  stories: Story[]
}>()
</script>
<template>
  <table class="table">
    <thead>
      <tr>
        <th class="table__table-head">Name</th>
        <th class="table__table-head">Author</th>
        <th class="table__table-head">Last update</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="story in stories"
        :key="story.id"
      >
        <td class="table__table-data table__table-data-name-cell">
          <template v-if="story.is_folder"><FolderIcon /></template>
          <template v-else><StoryIcon /></template>

          <div class="table__table-data-name">
            <strong class="strong">{{ story.name }}</strong>
            <span>{{ story.slug }}</span>
          </div>
        </td>
        <td class="table__table-data">{{ story.last_author.friendly_name }}</td>
        <td class="table__table-data">{{ story.updated_at }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
.table {
  width: 100%;
}

.table__table-head {
  box-sizing: border-box;
  padding: 14px 10px;
  color: #8d919f;
  font-weight: 400;
  line-height: 1.3;
  text-align: left;
}

.table__table-data-name {
  display: flex;
  flex-direction: column;
}
.table__table-data {
  color: #8d919f;
  gap: 20px;
  padding: 14px 10px;
}

.strong {
  color: #1b243f;
  font-weight: 500;
}

.table__table-data-name-cell {
  display: flex;
  align-items: center;
}
</style>
