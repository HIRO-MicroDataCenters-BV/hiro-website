<script setup lang="ts">
import AppCard from '@/components/AppCard.vue';
import { cityCards, cityGraph } from '@/constants/city-page';
import AppFlowChart from '@/components/AppFlowChart.vue';
import AppCardSelector from '@/components/AppCardSelector.vue';
</script>

<template>
  <div class="city-view">
    <section class="card-section">
      <AppCard
        v-for="(card, index) in cityCards.slice(0, 2)"
        :key="index"
        :label="card.title"
        :text="card.description"
        :cube-variant="card.type"
      />
    </section>
    <AppFlowChart
      :nodes="cityGraph.nodes"
      :edges="cityGraph.edges"
      class="city-view__flow-chart"
    />
    <section class="card-section">
      <AppCard
        v-for="(card, index) in cityCards.slice(2, 4)"
        :key="index"
        :label="card.title"
        :text="card.description"
        :cube-variant="card.type"
      />
    </section>
    <AppCardSelector
      class="city-view__card-selector"
      :cards="cityCards"
    />
  </div>
</template>

<style scoped>
.city-view {
  display: flex;
  gap: 20px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (--breakpoint-desktop) {
    flex-direction: row;
    gap: 20px;
  }
}

.city-view__flow-chart {
  min-height: 400px;
}

.card-section {
  display: none;

  @media (--breakpoint-desktop) {
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    max-height: 600px;
  }
}

.city-view__card-selector {
  @media (--breakpoint-desktop) {
    display: none;
  }
}
</style>
