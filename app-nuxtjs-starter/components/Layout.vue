<template>
    <div class='container'>
    <header class='header'>
      <div class='titleContainer'>
        <img src="~/assets/storyblok_icon.svg" alt="Storyblok logo">
        <h1 class='title'>
          {{title}}
        </h1>
      </div>
      <div class='subTitle'>
        Created with&nbsp;
        <code>
          <a
            target="_blank"
            href="https://www.npmjs.com/package/@storyblok/app-extension-auth"
          >
            @storyblok/app-extension-auth
          </a>
        </code>.
      </div>
    </header>
    <main className='main' >{{children}}</main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Storyblok App Starter',
      description: 'Learn how to build an sidebar app for Storyblok using Next.js',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:title', name: 'og:title', content: this.title },
        { hid: 'twitter:card', name: 'twitter:card', content: "summary_large_image" },
      ],
      link: [
        { rel: 'icon', href: '/assets/favicon.ico' }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  padding: 45px 80px;
}

.header {
  display: flex;
  flex-direction: column;
}

.titleContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.title {
  color: #1b243f;
  font-size: 2.6rem;
  font-weight: 700;
  margin: 0px;
}

.subTitle {
  margin: 8px 0;
  color: #8d919f;
  font-size: 1.6rem;
  line-height: 1.5;
}

.main {
  padding-top: 45px;
}
</style>