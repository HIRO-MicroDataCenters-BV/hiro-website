<script setup lang="ts">
import ArrowIcon from '@/assets/arrow.svg';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import {
  CUSTOMERS_ROUTES,
  type RoutePaths,
} from '@/constants/customers-routes';

const router = useRouter();

const currentPath = computed(
  () => router.currentRoute.value.path as RoutePaths,
);
const isShowNavigation = computed(() =>
  CUSTOMERS_ROUTES.includes(currentPath.value),
);
const currentPathIndex = computed(() =>
  CUSTOMERS_ROUTES.indexOf(currentPath.value),
);
const isAbleToNavigateForward = computed(
  () =>
    currentPathIndex.value !== -1 &&
    currentPathIndex.value < CUSTOMERS_ROUTES.length - 1,
);
const isAbleToNavigateBackward = computed(() => currentPathIndex.value > 0);

const navigateToNext = () => {
  if (isAbleToNavigateForward.value) {
    router.push(CUSTOMERS_ROUTES[currentPathIndex.value + 1]);
  }
};

const navigateToPrevious = () => {
  if (isAbleToNavigateBackward.value) {
    router.push(CUSTOMERS_ROUTES[currentPathIndex.value - 1]);
  }
};
</script>

<template>
  <nav
    v-if="isShowNavigation"
    class="app-navigation"
  >
    <a
      v-if="isAbleToNavigateBackward"
      class="app-navigation__link"
      @click="navigateToPrevious"
    >
      <ArrowIcon class="app-navigation__arrow" />
    </a>
    <a
      v-if="isAbleToNavigateForward"
      class="app-navigation__link"
      @click="navigateToNext"
    >
      <ArrowIcon class="app-navigation__arrow app-navigation__arrow--right" />
    </a>
  </nav>
</template>

<style scoped>
.app-navigation {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 1rem 0;
}

.app-navigation__link {
  cursor: pointer;
}

.app-navigation__arrow--right {
  transform: rotate(180deg);
}
</style>
