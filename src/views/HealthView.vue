<script setup lang="ts">
import AppCard from '@/components/AppCard.vue';
import { healthCards, healthGraph } from '@/constants/health-page';
import AppFlowChart from '@/components/AppFlowChart.vue';
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
  </div>
</template>

<style scoped>
.health-view {
  display: flex;
  gap: 20px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}

.card-section {
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: fit-content;
  height: 100%;
  align-items: center;
  justify-content: center;
}
</style>
