<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import { computed } from 'vue';
import { routesCubesIcons } from '@/constants/cube-parts';

const router = useRouter();

const currentPathName = computed(
  () => router.currentRoute.value.name || 'Home',
);

const currentPath = computed(() => router.currentRoute.value.path);
</script>

<template>
  <header class="app-header">
    <nav>
      <RouterLink to="/">
        <img
          alt="Hiro logo"
          class="logo"
          src="@/assets/hiro-logo.svg?url"
          height="100"
          width="181"
        />
      </RouterLink>
    </nav>
    <div class="app-header__heading">
      <component
        :is="routesCubesIcons[currentPath]"
        v-if="currentPath"
        class="app-header__heading-cube"
      />
      <h1 class="app-header__heading-text">
        {{ currentPathName }}
      </h1>
    </div>
    <div class="app-header__heading-right"></div>
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
  align-items: end;
  gap: 20px;
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

.app-header__heading-cube {
  position: relative;
  top: 20px;
}

.app-header__heading-right {
  flex: 1;
}
</style>
