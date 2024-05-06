<script setup lang="ts">
import AppFooter from '@/layout/AppFooter.vue';
import AppHeader from '@/layout/AppHeader.vue';
</script>

<template>
  <div class="layout">
    <AppHeader class="layout__header" />
    <main class="layout__main">
      <slot />
    </main>
    <AppFooter class="layout__footer" />
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  height: 100dvh;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-template-rows: auto 1fr auto;
}

.layout__header {
  grid-area: header;
}

.layout__main {
  grid-area: main;
}

.layout__footer {
  grid-area: footer;
  display: flex;
}
</style>
