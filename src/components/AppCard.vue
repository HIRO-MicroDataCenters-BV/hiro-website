<script setup lang="ts">

</script>

<template>
  <div class="app-card">
    <div class="app-card__label">
      Label
    </div>
    <div class="app-card__body">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem corporis, delectus ducimus est minus nam!
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
  background: url("border.svg");
  background-size: cover;
}

.app-card__label {
  background: var(--color-heading);
  max-width: fit-content;
  padding: 0 10px;
}
</style>
