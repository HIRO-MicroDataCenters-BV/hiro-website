<script setup lang="ts">
import { routesCubesIcons } from '@/constants/cube-parts';

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
      <div class="app-card-link__title">
        <div class="app-card-link__label">
          {{ label }}
        </div>
        <img
          :src="routesCubesIcons[route]"
          alt="icon"
          class="app-card-link__icon"
        />
      </div>
      <div class="app-card-link__body">
        {{ text }}
      </div>
      <div class="app-card-link__footer">See more</div>
    </div>
  </RouterLink>
</template>

<style scoped>
.app-card-link {
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  padding: 20px;
  max-width: 366px;
  height: 250px;
  background: #000;
  cursor: pointer;
  text-decoration: none;
  color: var(--color-text);

  @media (--breakpoint-tablet-large) {
    box-shadow: -1px 1px 16px 3px rgba(255, 255, 255, 0.25);
    &:hover {
      transform: scale(1.05);
    }
  }
}

.app-card-link__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-card-link__label {
  background: var(--color-heading);
  max-width: fit-content;
  padding: 0 10px;
  font-weight: 600;
}

.app-card-link__icon {
  width: 50px;
  height: 50px;
}

.app-card-link__body {
  text-align: left;
}

.app-card-link__footer {
  display: flex;
  flex-direction: row-reverse;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  margin-top: auto;
}
</style>
