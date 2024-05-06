<script setup lang="ts">
import AppCard from '@/components/AppCard.vue';
const testCard = {
  label: 'Label',
  text:
    'Lorem ipsum dolor sit amet, ' +
    'consectetur adipisicing elit. ' +
    'A delectus sunt vero voluptate. ' +
    'Adipisci deleniti dolorem ' +
    'magnam optio quas sunt.',
};
</script>

<template>
  <div class="playground_view">
    <section class="card-section">
      <AppCard
        :label="testCard.label"
        :text="testCard.text"
      />
      <AppCard
        :label="testCard.label"
        :text="testCard.text"
        isAlternativeColor
      />
      <AppCard
        :label="testCard.label"
        :text="testCard.text"
      />
    </section>
    <div></div>
    <section class="card-section">
      <AppCard
        :label="testCard.label"
        :text="testCard.text"
      />
      <AppCard
        :label="testCard.label"
        :text="testCard.text"
        isAlternativeColor
      />
      <AppCard
        :label="testCard.label"
        :text="testCard.text"
      />
    </section>
  </div>
</template>

<style scoped>
.playground_view {
  display: flex;
  gap: 20px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}

.card-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: fit-content;
  height: 100%;
  align-items: center;
  justify-content: center;
}
</style>
