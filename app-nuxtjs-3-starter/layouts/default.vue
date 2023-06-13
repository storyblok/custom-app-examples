<template>
  <div class="layout">
    <Header />
    <main class="layout__main">
      <slot />
    </main>
  </div>
</template>

<style>
.layout {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 45px 80px;
}

.layout__main {
  flex: 1;
  display: flex;
}
</style>
