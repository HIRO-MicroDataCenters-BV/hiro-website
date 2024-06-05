<script setup lang="ts">
import { servicesCards } from '@/constants/services-page';
import { cubePartsIcons } from '@/constants/cube-parts';
</script>

<template>
  <div class="services-view-cards">
    <div
      v-for="(service, index) in servicesCards"
      :key="service.type + index"
      class="services-view-cards__card"
    >
      <component
        :is="cubePartsIcons[service.type]"
        v-if="service.type"
      />
      <div class="services-view-cards__card-title-container">
        <h2 class="services-view-cards__card-title">
          {{ service.title }}
        </h2>
      </div>
    </div>
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

.services-view-cards__card {
  display: flex;
  gap: 20px;
  align-items: center;
  cursor: pointer;

  &:nth-child(odd) {
    align-self: end;
  }
}

.services-view-cards__card-title-container {
  width: 200px;
  height: 30px;
  background: #0c68aa;
  display: flex;
  justify-content: center;
  align-items: center;
}

.services-view-cards__card-title {
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}
</style>
