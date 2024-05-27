<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import { computed } from 'vue';
const router = useRouter();

const currentPathObject = computed(
  () => router.currentRoute.value.name || 'Home',
);
</script>

<template>
  <header class="app-header">
    <nav>
      <img
        alt="Hiro logo"
        class="logo"
        src="@/assets/hiro-logo.svg"
        height="100"
        width="181"
      />
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/services">About</RouterLink>
      <RouterLink to="/playground">Playground</RouterLink>
    </nav>
    <div class="app-header__heading">
      <h1 class="app-header__heading-text">
        {{ currentPathObject }}
      </h1>
    </div>
    <div style="flex: 1"></div>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
}

.app-header nav {
  display: flex;
  align-items: center;
  flex: 1;
}

.app-header__heading {
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  background: url('./assets/header-h1.svg') bottom no-repeat;
  text-shadow: 0 4px 4px rgba(255, 255, 255, 0.25);
}

.app-header__heading-text {
  text-transform: uppercase;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
}
</style>
