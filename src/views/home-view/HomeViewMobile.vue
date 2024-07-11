<script setup lang="ts">
import AppCardLink from '@/components/AppCardLink.vue';
import { customerCards, joinUsCard } from '@/constants/home-page';
import AppCard from '@/components/AppCard.vue';
</script>

<template>
  <div class="home-view-mobile">
    <AppCardLink
      :label="customerCards.energyGrid.title"
      :text="customerCards.energyGrid.description"
      :route="customerCards.energyGrid.route"
    />
    <AppCard
      :label="joinUsCard.title"
      :text="joinUsCard.description"
    />
  </div>
</template>

<style scoped>
.home-view-mobile {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;

  @media (--breakpoint-tablet-large) {
    display: none;
  }
}
</style>
