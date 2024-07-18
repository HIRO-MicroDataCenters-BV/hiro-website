<script setup lang="ts">
import AppCard from '@/components/AppCard.vue';
import { healthCards, healthGraph } from '@/constants/health-page';
import AppFlowChart from '@/components/AppFlowChart.vue';
import AppCardSelector from '@/components/AppCardSelector.vue';
</script>

<template>
  <div class="health-view">
    <section class="card-section">
      <AppCard
        v-for="(card, index) in healthCards.slice(0, 2)"
        :key="index"
        :label="card.title"
        :text="card.description"
        :cube-variant="card.type"
      />
    </section>
    <AppFlowChart
      :nodes="healthGraph.nodes"
      :edges="healthGraph.edges"
      class="health-view__flow-chart"
    />
    <section class="card-section">
      <AppCard
        v-for="(card, index) in healthCards.slice(2, 4)"
        :key="index"
        :label="card.title"
        :text="card.description"
        :cube-variant="card.type"
      />
    </section>
    <AppCardSelector
      class="health-view__card-selector"
      :cards="healthCards"
    />
  </div>
</template>

<style scoped>
.health-view {
  display: flex;
  gap: 40px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (--breakpoint-desktop) {
    flex-direction: row;
    gap: 20px;
  }
}

.health-view__flow-chart {
  min-height: 400px;
}

.card-section {
  display: none;

  @media (--breakpoint-desktop) {
    display: flex;
    flex-direction: column;
    gap: 100px;
    width: fit-content;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
}

.health-view__card-selector {
  @media (--breakpoint-desktop) {
    display: none;
  }
}
</style>
