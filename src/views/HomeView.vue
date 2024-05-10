<script setup lang="ts">
import { ref } from 'vue';

import AppGraph from '@/components/Graph';
import type { NodeNameValue } from '@/components/Graph';

const activeCube = ref<NodeNameValue | null>(null);

const handleChange = (value: NodeNameValue) => {
  activeCube.value = value;
};
</script>

<template>
  <main>
    <h1>Home view</h1>

    <p>Active cube: {{ activeCube }}</p>
    <div style="width: 50%; margin: 0 auto">
      <AppGraph
        :activeCube="activeCube"
        @change="handleChange"
      />
    </div>
  </main>
</template>
