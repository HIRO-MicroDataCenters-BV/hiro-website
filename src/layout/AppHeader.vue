<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="app-header">
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="50"
      height="50"
    />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/playground">Playground</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  padding: 10px;
  display: flex;
  align-items: center;
}
</style>
