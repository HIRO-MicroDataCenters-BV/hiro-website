<script setup lang="ts">
import AppCard from '@/components/AppCard.vue';
import { energyGridCards, energyGridGraph } from '@/constants/energy-grid-page';
import AppFlowChart from '@/components/AppFlowChart.vue';
import AppCardSelector from '@/components/AppCardSelector.vue';
</script>

<template>
  <div class="energy-grid-view">
    <section class="card-section">
      <AppCard
        v-for="(card, index) in energyGridCards.slice(0, 2)"
        :key="index"
        :label="card.title"
        :text="card.description"
        :cube-variant="card.type"
      />
    </section>
    <AppFlowChart
      :nodes="energyGridGraph.nodes"
      :edges="energyGridGraph.edges"
      class="energy-grid-view__flow-chart"
    />
    <section class="card-section">
      <AppCard
        v-for="(card, index) in energyGridCards.slice(2, 4)"
        :key="index"
        :label="card.title"
        :text="card.description"
        :cube-variant="card.type"
      />
    </section>
    <AppCardSelector
      class="energy-grid-view__card-selector"
      :cards="energyGridCards"
    />
  </div>
</template>

<style scoped>
.energy-grid-view {
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

.energy-grid-view__flow-chart {
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

.energy-grid-view__card-selector {
  @media (--breakpoint-desktop) {
    display: none;
  }
}
</style>
