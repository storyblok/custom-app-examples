<template>
    <ul class="list">
        <li v-for="story in stories" :key="story.uid">
            {{story.is_folder ? '📁' : '📄'}} <strong>{{story.name}}</strong>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'Stories',
  props: {
    stories: [Array],
  },
}
</script>

<style scoped>
.list {
  padding: 0;
  list-style: none;
}

.listItem {
  padding: 10px 15px;
  display: flex;
  gap: 10px;
}
</style>