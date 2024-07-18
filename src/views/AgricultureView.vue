<script setup lang="ts">
import AppCard from '@/components/AppCard.vue';
import {
  agricultureCards,
  agricultureGraph,
} from '@/constants/agriculture-page';
import AppFlowChart from '@/components/AppFlowChart.vue';
import AppCardSelector from '@/components/AppCardSelector.vue';
</script>

<template>
  <div class="agriculture-view">
    <section class="card-section">
      <AppCard
        v-for="(card, index) in agricultureCards.slice(0, 2)"
        :key="index"
        :label="card.title"
        :text="card.description"
        :cube-variant="card.type"
      />
    </section>
    <AppFlowChart
      :nodes="agricultureGraph.nodes"
      :edges="agricultureGraph.edges"
      class="agriculture-view__flow-chart"
    />
    <section class="card-section">
      <AppCard
        v-for="(card, index) in agricultureCards.slice(2, 4)"
        :key="index"
        :label="card.title"
        :text="card.description"
        :cube-variant="card.type"
      />
    </section>
    <AppCardSelector
      class="agriculture-view__card-selector"
      :cards="agricultureCards"
    />
  </div>
</template>

<style scoped>
.agriculture-view {
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

.agriculture-view__flow-chart {
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

.agriculture-view__card-selector {
  @media (--breakpoint-desktop) {
    display: none;
  }
}
</style>
