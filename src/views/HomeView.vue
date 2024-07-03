<script setup lang="ts">
import AppCard from '@/components/AppCard.vue';
import { customerCards, joinUsCard } from '@/constants/home-page';
import AppCardLink from '@/components/AppCardLink.vue';

const { industry, energyGrid, city, agriculture, health } = customerCards;
</script>

<template>
  <main class="customers-view">
    <section class="customers-view__upper-section">
      <AppCardLink
        :label="industry.title"
        :text="industry.description"
        :route="industry.route"
      />
      <AppCardLink
        :label="energyGrid.title"
        :text="energyGrid.description"
        :route="energyGrid.route"
      />
      <AppCardLink
        :label="city.title"
        :text="city.description"
        :route="city.route"
      />
    </section>
    <section class="customers-view__lower-section">
      <AppCardLink
        :label="agriculture.title"
        :text="agriculture.description"
        :route="agriculture.route"
      />
      <AppCard
        :label="joinUsCard.title"
        :text="joinUsCard.description"
      />
      <AppCardLink
        :label="health.title"
        :text="health.description"
        :route="health.route"
      />
    </section>
  </main>
</template>

<style scoped>
.customers-view {
  display: flex;
  gap: 3rem;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
}

.customers-view__upper-section {
  display: flex;
  gap: 1rem;
}

.customers-view__lower-section {
  display: flex;
  gap: 1rem;
}
</style>
