<script setup lang="ts">
import AppCard from '@/components/AppCard.vue';
import { customerCards, joinUsCard } from '@/constants/home-page';
import AppCardLink from '@/components/AppCardLink.vue';

const { industry, energyGrid, city, agriculture, health } = customerCards;
</script>

<template>
  <div class="customers-view-desktop">
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
  </div>
</template>

<style scoped>
.customers-view-desktop {
  display: none;

  @media (--breakpoint-tablet-large) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 1rem;
    align-items: center;
    justify-content: center;
  }

  @media (--breakpoint-desktop) {
    flex-direction: column;
  }
}

.customers-view__upper-section {
  visibility: hidden;

  @media (--breakpoint-tablet-large) {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    visibility: visible;
  }

  @media (--breakpoint-desktop) {
    flex-direction: row;
  }
}

.customers-view__lower-section {
  visibility: hidden;

  @media (--breakpoint-tablet-large) {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    visibility: visible;
  }

  @media (--breakpoint-desktop) {
    flex-direction: row;
  }
}
</style>
