<script setup lang="ts">
import AppCard from '@/components/AppCard.vue';
import { cubePartsLinks } from '@/constants/cube-parts';
import { ref } from 'vue';

const props = defineProps({
  cards: {
    type: Object,
    required: true,
  },
});

const selectedCard = ref(props.cards[0]);
</script>

<template>
  <div class="app-card-selector">
    <div class="app-card-selector__menu">
      <button
        v-for="(card, index) in cards"
        :key="index + card.title"
        class="app-card-selector__menu-item"
        :class="{
          [`app-card-selector__menu-item--active-${card.type}`]:
            card.title === selectedCard.title,
        }"
        @click="selectedCard = card"
      >
        <img
          v-if="card.type"
          :src="cubePartsLinks[card.type]"
          :alt="card.type"
        />
      </button>
    </div>
    <div class="app-card-selector__body">
      <AppCard
        :label="selectedCard.title"
        :text="selectedCard.description"
        :cube-variant="selectedCard.type"
        :no-picture="true"
        :is-dense="true"
      />
    </div>
  </div>
</template>

<style scoped>
.app-card-selector {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.app-card-selector__menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--hiro-c-dark-gray);
  gap: 20px;
}

.app-card-selector__menu-item {
  background: transparent;
  border: none;
  height: 60px;
  position: relative;
  top: 3px;
  width: 100%;
  cursor: pointer;
}

.app-card-selector__menu-item--active {
  border-bottom: black;
}

.app-card-selector__menu-item--active-cognitive-engine {
  border-bottom: 3px solid var(--hiro-c-cube-blue);
}

.app-card-selector__menu-item--active-data-spaces {
  border-bottom: 3px solid var(--hiro-c-cube-violet);
}

.app-card-selector__menu-item--active-edge-cloud-services {
  border-bottom: 3px solid var(--hiro-c-cube-orange);
}

.app-card-selector__menu-item--active-governance {
  border-bottom: 3px solid var(--hiro-c-cube-yellow);
}

.app-card-selector__menu-item--active-edge-micro-data-centers {
  border-bottom: 3px dotted var(--color-text);
}
</style>
