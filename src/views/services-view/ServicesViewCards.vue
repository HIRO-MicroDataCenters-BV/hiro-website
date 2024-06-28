<script setup lang="ts">
import { servicesCards } from '@/constants/services-page';
import ServicesViewCard from '@/views/services-view/ServicesViewCard.vue';
import { ref } from 'vue';

const activeCard = ref('');
</script>

<template>
  <div class="services-view-cards">
    <ServicesViewCard
      v-for="(service, index) in servicesCards"
      :key="service.type + index"
      :service="service"
      :active-card="activeCard"
      @activate-card="activeCard = $event"
    />
  </div>
</template>

<style scoped>
.services-view-cards {
  display: flex;
  gap: 50px;
  padding: 20px;
  justify-content: center;
  flex-direction: column;
  flex: 1;
}
</style>
