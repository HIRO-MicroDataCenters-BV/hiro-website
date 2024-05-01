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
});
</script>

<template>
  <div class="app-card">
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
  background: url('border.svg');
  background-size: cover;
}

.app-card__label {
  background: var(--color-heading);
  max-width: fit-content;
  padding: 0 10px;
  font-weight: 600;
}
</style>
