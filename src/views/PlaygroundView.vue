<script setup lang="ts">
import { ref } from 'vue';
import AppCard from '@/components/AppCard.vue';
import AppGraph from '@/components/Graph';

import type { NodeNameValue } from '@/components/Graph';

const activeCube = ref<NodeNameValue | null>(null);
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
    <section class="graph-section">
      <AppGraph :active-cube="activeCube" />
    </section>
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

.graph-section {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
