<script setup lang="ts">
import { cubePartsIcons } from '@/constants/cube-parts';

const props = defineProps({
  service: {
    type: Object,
    required: true,
  },
  activeCard: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['activateCard']);

const activate = () => {
  emit('activateCard', props.service.type);
};
</script>

<template>
  <div class="services-view-cards__card">
    <div
      class="services-view-cards__card-heading"
      @click="activate"
    >
      <component
        :is="cubePartsIcons[service.type]"
        v-if="service.type"
      />
      <div
        class="services-view-cards__card-title-container"
        :class="`services-view-cards__card-title-container--${service.type}`"
      >
        <h2 class="services-view-cards__card-title">
          {{ service.title }}
        </h2>
      </div>
    </div>
    <div
      v-if="activeCard === service.type"
      class="services-view-cards__card-description"
    >
      {{ service.description }}
    </div>
  </div>
</template>

<style scoped>
.services-view-cards__card {
  display: flex;
  gap: 20px;
  cursor: pointer;
  flex-direction: column;

  &:nth-child(odd) {
    align-items: end;
  }
}

.services-view-cards__card-heading {
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
}

.services-view-cards__card-title-container {
  width: 200px;
  height: 30px;
  background: #0c68aa;
  display: flex;
  justify-content: center;
  align-items: center;
}

.services-view-cards__card-title-container--edge-cloud-services {
  background: var(--hiro-c-cube-orange);
}

.services-view-cards__card-title-container--data-spaces {
  background: var(--hiro-c-cube-violet);
}

.services-view-cards__card-title-container--cognitive-engine {
  background: var(--hiro-c-cube-blue);
}

.services-view-cards__card-title-container--governance {
  background: var(--hiro-c-cube-yellow);
}

.services-view-cards__card-title-container--edge-micro-data-centers {
  background: transparent;
  border: 1px dashed var(--color-text);
}

.services-view-cards__card-title {
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

.services-view-cards__card-description {
  padding: 16px;
  background-size: cover;
  min-height: 150px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 4px;
    border: 3px solid transparent;
    background: linear-gradient(180deg, #e0e0e0 0%, transparent 95%) border-box;
    mask:
      linear-gradient(#fff 0%, #fff 0%) padding-box,
      linear-gradient(#fff 0%, #fff 0%);
    mask-composite: exclude;
    z-index: -1;
  }
}
</style>
