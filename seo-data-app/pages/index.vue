<script>
import { getStories } from "./../lib/utils";

export default {
  data() {
    return {
      storiesWithData: [],
      pageSize: 3, // stories per page
      current: 1, // current page
      total: null, // all stories
    };
  },

  async mounted() {
    if (window.top == window.self) {
      // Redirect if outside Storyblok
      window.location.assign("https://app.storyblok.com/oauth/app_redirect");
    } else {
      // Init the stories
      await this.setPage(1);
    }
  },

  computed: {
    totalPages: function () {
      return Math.ceil(this.total / this.pageSize);
    },
  },

  methods: {
    setPage: async function (pageNumber) {
      this.current = pageNumber;
      const { stories, total } = await getStories(
        this.$route.query.space_id,
        this.pageSize,
        this.current
      );
      this.total = total;
      this.storiesWithData = stories;
    },
  },
};
</script>

<template>
  <div class="container mx-auto">
    <div class="w-full flex justify-center py-4">
      <nav class="inline-flex rounded" aria-label="pagination">
        <button
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          @click="setPage(pageNumber)"
          class="rounded p-1 px-3 text-sm bg-gray-300 hover:bg-gray-400 mx-1"
        >
          <span>{{ pageNumber }}</span>
        </button>
      </nav>
    </div>
    <div class="container">
      <div class="w-100 px-20 flex flex-col justify-center">
        <div>
          <story-card
            v-for="story in storiesWithData"
            v-bind:key="story.id"
            v-bind:data="story"
          />
        </div>
      </div>
    </div>
  </div>
</template>
