<script setup lang="ts">
import AppFooter from '@/layout/AppFooter.vue';
import AppHeader from '@/layout/AppHeader.vue';
</script>

<template>
  <AppHeader />
  <slot />
  <AppFooter class="layout__footer" />
</template>

<style scoped>
.layout__footer {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
}
</style>
