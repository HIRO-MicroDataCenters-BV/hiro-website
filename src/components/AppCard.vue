<script setup lang="ts">
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
  isAlternativeColor: {
    type: Boolean,
    default: false,
  },
  cubeVariant: {
    type: String,
    required: false,
    default: '',
    validator: (value: string) =>
      [
        'cognitive-engine',
        'data-spaces',
        'edge-cloud-services',
        'governance',
        'edge-micro-data-centers',
        '',
      ].includes(value),
  },
});
</script>

<template>
  <div
    class="app-card"
    :class="{ 'app-card--alternative-color': isAlternativeColor }"
  >
    <div class="app-card__label-container">
      <div
        class="app-card__label"
        :class="{
          [`app-card__label--${cubeVariant}`]: Boolean(cubeVariant),
        }"
      >
        {{ label }}
      </div>
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
  gap: 20px;
  position: relative;
  padding: 30px;
  width: 342px;
  height: 190px;
  background: url('card-border.svg');
  background-size: cover;

  &.app-card--alternative-color {
    background: url('card-border-alt.svg');
  }
}

.app-card__label-container {
  display: flex;
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
  background: var(--hiro-c-cube-green);
}

.app-card__label--governance {
  background: var(--hiro-c-cube-yellow);
}

.app-card__label--edge-micro-data-centers {
  background: transparent;
  border: 1px dashed var(--color-text);
}
</style>