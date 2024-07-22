<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import { computed } from 'vue';
import { routesCubesIcons } from '@/constants/cube-parts';
import AppNavigation from '@/layout/AppNavigation.vue';

const router = useRouter();

const currentPathName = computed(
  () => router.currentRoute.value.name || 'Home',
);

const currentPath = computed(
  () => router.currentRoute.value.path as keyof typeof routesCubesIcons,
);
</script>

<template>
  <header class="app-header">
    <nav class="app-header__logo">
      <RouterLink to="/">
        <img
          alt="Hiro logo"
          class="app-header__heading-logo"
          src="@/assets/hiro-logo.svg?url"
        />
      </RouterLink>
    </nav>
    <div class="app-header__heading">
      <img
        v-if="routesCubesIcons[currentPath]"
        :src="routesCubesIcons[currentPath]"
        :alt="currentPath"
        class="app-header__heading-cube"
      />
      <h1 class="app-header__heading-text">
        {{ currentPathName }}
      </h1>
    </div>
    <div class="app-header__heading-arrows">
      <AppNavigation />
    </div>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  flex-direction: column;

  @media (--breakpoint-desktop) {
    flex-direction: row;
  }
}

.app-header__logo {
  display: flex;
  align-items: flex-start;
  align-self: baseline;

  @media (--breakpoint-desktop) {
    align-items: center;
  }
}

.app-header__heading-logo {
  height: 50px;

  @media (--breakpoint-desktop) {
    height: 100px;
    width: 181px;
  }
}

.app-header__heading {
  flex: 1;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 5px;
  padding: 0.5rem 0;
  background: url('./assets/header-mobile-h1.svg') bottom no-repeat;
  text-shadow: 0 4px 4px rgba(255, 255, 255, 0.25);

  @media (--breakpoint-tablet-large) {
    background: url('./assets/header-h1.svg') bottom no-repeat;
    width: 100%;
    gap: 20px;
    padding: 1rem 0;
  }

  @media (--breakpoint-desktop) {
    background: url('./assets/header-h1.svg') bottom no-repeat;
  }
}

.app-header__heading-text {
  text-transform: uppercase;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-align: center;

  @media (--breakpoint-tablet-large) {
    font-size: 1.5rem;
  }

  @media (--breakpoint-desktop) {
    font-size: 1.5rem;
  }
}

.app-header__heading-cube {
  position: relative;
  top: 10px;
  width: 40px;

  @media (--breakpoint-tablet-large) {
    top: 20px;
    width: initial;
  }

  @media (--breakpoint-desktop) {
  }
}

.app-header__heading-arrows {
  align-self: end;
  padding: 0 40px;
  @media (--breakpoint-desktop) {
    min-width: 181px;
  }
}
</style>
