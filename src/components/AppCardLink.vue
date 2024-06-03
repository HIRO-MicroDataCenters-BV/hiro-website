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
  route: {
    type: String,
    required: false,
    default: '',
  },
  isAlternativeColor: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <RouterLink :to="route">
    <div
      class="app-card-link"
      :class="{ 'app-card-link--alternative-color': isAlternativeColor }"
    >
      <div
        class="app-card-link__label"
        :class="{
          [`app-card-link__label--${cubeVariant}`]: Boolean(cubeVariant),
        }"
      >
        {{ label }}
      </div>
      <div class="app-card-link__body">
        {{ text }}
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.app-card-link {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  padding: 30px;
  width: 366px;
  height: 250px;
  background: #000;
  box-shadow: -1px 1px 16px 3px rgba(255, 255, 255, 0.25);
  cursor: pointer;
  text-decoration: none;
  color: var(--color-text);
}

.app-card-link__label {
  background: var(--color-heading);
  max-width: fit-content;
  padding: 0 10px;
  font-weight: 600;
}
</style>
