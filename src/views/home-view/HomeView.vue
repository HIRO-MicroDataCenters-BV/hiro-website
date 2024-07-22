<script setup lang="ts">
import HomeViewMobile from './HomeViewMobile.vue';
import HomeViewDesktop from './HomeViewDesktop.vue';
</script>

<template>
  <main class="home-view">
    <p class="home-view__heading">
      Enhanced connectivity, automation, adaptive and learning systems, are
      driving the digital transformation of enterprises that delivers them
      higher levels of efficiency and sustainability in a data economy.
    </p>
    <HomeViewMobile />
    <HomeViewDesktop />
  </main>
</template>

<style scoped>
.home-view__heading {
  max-width: 300px;
  text-align: center;
  margin: 0 auto;
  padding: 1rem 0;

  @media (--breakpoint-tablet-large) {
    max-width: 450px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media (--breakpoint-desktop) {
    max-width: 550px;
  }
}
</style>
