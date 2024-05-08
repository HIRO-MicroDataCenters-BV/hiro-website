<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },
  isAlternativeColor: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="app-card"
    :class="{ 'app-card--alternative-color': isAlternativeColor }"
  >
    <div class="app-card__label">
      {{ label }}
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

.app-card__label {
  background: var(--color-heading);
  max-width: fit-content;
  padding: 0 10px;
  font-weight: 600;
}
</style>
