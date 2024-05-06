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
        src="./assets/hiro-logo.png"
        width="126"
        height="86"
      />
      These buttons are temporary
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/playground">Playground</RouterLink>
    </nav>
    <div class="app-header__heading">
      <h1 class="app-header__heading-text">
        {{ currentPathObject }}
      </h1>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  padding: 10px 0;
}

.app-header nav {
  display: flex;
  align-items: center;
}

.app-header__heading {
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
