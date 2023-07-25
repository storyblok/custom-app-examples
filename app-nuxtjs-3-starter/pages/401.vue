<script setup lang="ts">
onMounted(() => {
  if (typeof window !== 'undefined' && window.top === window.self) {
    window.location.assign('https://app.storyblok.com/oauth/app_redirect')
  }
})
</script>

<template>
  <div class="error">
    <UnauthorizedIcon />
    <h3 class="error__title">Unauthorized</h3>
    <h4 class="error__subtitle">Failed to authenticate</h4>
  </div>
</template>

<style scoped>
.error {
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error__title {
  margin: 10px 0;
  font-weight: 700;
  letter-spacing: 0;
  font-size: 1.625rem;
  line-height: 1.167;
}

.error__subtitle {
  margin: 0;
  font-weight: 400;
  letter-spacing: 0.00938em;
  color: #8d919f;
}
</style>
