<template>
  <header class="header">
    <div class="header__icon">
      <StoryblokIcon />
    </div>
    <div class="header__titles">
      <h1 class="header__title">Nuxt Custom Application</h1>
      <h2 class="header__subtitle">
        Created with
        <code>
          <a
            class="header__link"
            target="_blank"
            href="https://www.npmjs.com/package/@storyblok/app-extension-auth"
            >@storyblok/app-extension-auth</a
          >
        </code>
        .
      </h2>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 45px;
  align-items: flex-start;
}

.header__icon {
  margin-top: 8px;
}

.header__titles {
  display: flex;
  flex-direction: column;
}

.header__title {
  color: #1b243f;
  font-size: 1.625rem;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
}

.header__subtitle {
  display: flex;
  margin: 0 0 0 2px;
  font-weight: 400;
  letter-spacing: 0.00714em;
  color: #8d919f;
  font-size: 0.875rem;
}

.header__link {
  padding: 0 0 0 0.25rem;
}
</style>
