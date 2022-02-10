<script>
import { saveData } from "../lib/utils";

export default {
  props: ['data'],

  data() {
    return {
      story: {},
      changed: false,
    };
  },

  mounted() {
    this.story = this.data;
  },

  methods: {
    async saveStoryData(publish) {
      const save = await saveData(
        this.$route.query.space_id,
        this.story,
        publish
      );

      if (save) {
        this.story = save;
        this.changed = true;
        setTimeout(() => {
          this.changed = false;
        }, 2000);
      }
    },
  },
};
</script>

<template>
  <div class="container mx-auto my-10">
    <div
      :key="story.id"
      v-if="story && story.content"
      class="py-4 px-6 bg-white shadow-md rounded my-2 mx-2"
    >
      <div class="flex justify-between">
        <div class="block text-gray-800 text-md font-bold">Story name: "{{ story.name }}"</div>
        <div class="rounded p-1 px-3 text-sm bg-gray-300">{{ story.published ? "Published story" : "Unpublished story" }}{{ story.unpublished_changes ? " with unpublished changes" : "" }}</div>
      </div>
      <div>
        <label
          class="block text-gray-800 text-sm font-bold mb-2 mt-5"
          for="title"
          >Meta Title</label
        >
        <input
          type="text"
          v-model="story.content.seo.title"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
        />
      </div>
      <div>
        <label
          class="block text-gray-800 text-sm font-bold mb-2 mt-5"
          for="description"
          >Meta Description</label
        >
        <textarea
          type="text"
          v-model="story.content.seo.description"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
        />
      </div>

      <div v-if="changed" class="bg-green-700 mt-2">
        <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <p class="ml-3 w-full font-medium text-white text-right">
              Changes Saved
            </p>
        </div>
      </div>

      <div v-if="!changed" class="flex justify-end mt-4">
        <button
          class="mx-2 bg-gray-800 hover:bg-blue-900 text-gray-100 py-2 px-4 rounded"
          @click="saveStoryData()"
        >
          Save Draft
        </button>
        <button
          class="mx-2 bg-gray-800 hover:bg-blue-900 text-gray-100 py-2 px-4 rounded"
          @click="saveStoryData(true)"
        >
          Publish
        </button>
      </div>
    </div>
  </div>
</template>
