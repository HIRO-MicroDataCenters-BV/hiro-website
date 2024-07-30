<script setup lang="ts">
import AppCard from '@/components/AppCard.vue';
import {
  industryCards,
  industryGraph,
} from '@/constants/industry-page/industry-page';
import AppFlowChart from '@/components/AppFlowChart.vue';
import AppCardSelector from '@/components/AppCardSelector.vue';
</script>

<template>
  <div class="industry-view">
    <section class="card-section">
      <AppCard
        v-for="(card, index) in industryCards.slice(0, 2)"
        :key="index"
        :label="card.title"
        :text="card.description"
        :cube-variant="card.type"
      />
    </section>
    <AppFlowChart
      :nodes="industryGraph.nodes"
      :edges="industryGraph.edges"
      class="industry-view__flow-chart"
    />
    <section class="card-section">
      <AppCard
        v-for="(card, index) in industryCards.slice(2, 4)"
        :key="index"
        :label="card.title"
        :text="card.description"
        :cube-variant="card.type"
      />
    </section>
    <AppCardSelector
      class="industry-view__card-selector"
      :cards="industryCards"
    />
  </div>
</template>

<style scoped>
.industry-view {
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

.industry-view__flow-chart {
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

.industry-view__card-selector {
  @media (--breakpoint-desktop) {
    display: none;
  }
}
</style>
