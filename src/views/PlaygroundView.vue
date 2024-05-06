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
  <main>
    <section>
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
  </main>
</template>

<style scoped></style>
