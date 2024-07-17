<script setup lang="ts">
import { cubeParts, cubePartsIcons } from '@/constants/cube-parts';

defineProps({
  label: {
    type: String,
    required: false,
    default: '',
  },
  text: {
    type: String,
    required: false,
    default: '',
  },
  cubeVariant: {
    type: String,
    required: false,
    default: '',
    validator: (value: string) =>
      Object.values(cubeParts).includes(value) || value === '',
  },
  noPicture: {
    type: Boolean,
    default: false,
  },
  isDense: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="app-card"
    :class="{
      'app-card--is-dense': isDense,
    }"
  >
    <div
      class="app-card__label-container"
      :class="{
        'app-card__label-container--no-cube': !cubeVariant,
      }"
    >
      <div
        class="app-card__label"
        :class="{
          [`app-card__label--${cubeVariant}`]: Boolean(cubeVariant),
        }"
      >
        {{ label }}
      </div>
      <component
        :is="cubePartsIcons[cubeVariant]"
        v-if="cubeVariant && !noPicture"
      />
    </div>
    <div class="app-card__body">
      {{ text }}
    </div>
  </div>
</template>

<style scoped>
.app-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  padding: 30px;
  width: 342px;
  min-height: 250px;

  &.app-card--is-dense {
    padding: 20px;
  }

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
  }
}

.app-card__label-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-card__label-container--no-cube {
  justify-content: center;
}

.app-card__label {
  background: var(--color-heading);
  max-width: fit-content;
  padding: 0 10px;
  font-weight: 600;
}

.app-card__label--cognitive-engine {
  background: var(--hiro-c-cube-blue);
}

.app-card__label--data-spaces {
  background: var(--hiro-c-cube-violet);
}

.app-card__label--edge-cloud-services {
  background: var(--hiro-c-cube-orange);
}

.app-card__label--governance {
  background: var(--hiro-c-cube-yellow);
}

.app-card__label--edge-micro-data-centers {
  background: transparent;
  border: 1px dashed var(--color-text);
}
</style>
