<template>
  <header class="header">
    <StoryblokIcon />
    <div class="header__titles">
      <h1>Nuxt Custom Application</h1>
      <h2>Subtitle</h2>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  gap: 10px 15px;
  margin-bottom: 50px;
  align-items: flex-start;
}

.header__titles {
  display: flex;
  flex-direction: column;
}

h1 {
  color: #1b243f;
  font-size: 1.625rem;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
}

h2 {
  margin: 0;
  font-weight: 400;
  letter-spacing: 0.00714em;
  color: #8d919f;
  font-size: 0.875rem;
}
</style>
