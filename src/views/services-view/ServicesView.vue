<script setup lang="ts">
import ServicesViewCards from './ServicesViewCards.vue';
import AppFlowChart from '@/components/AppFlowChart.vue';
import { servicesGraph } from '@/constants/services-page';
</script>

<template>
  <div class="services-view">
    <section class="services-view__graph-container">
      <AppFlowChart
        :nodes="servicesGraph.nodes"
        :edges="servicesGraph.edges"
      />
    </section>
    <section class="services-view__card-container">
      <ServicesViewCards />
    </section>
  </div>
</template>

<style scoped>
.services-view {
  display: flex;
  gap: 20px;
  padding: 0 1rem;
  justify-content: center;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.services-view__graph-container {
  display: flex;
  flex: 1;
  min-height: 400px;
}

.services-view__card-container {
  display: flex;
  flex: 1;
}
</style>
