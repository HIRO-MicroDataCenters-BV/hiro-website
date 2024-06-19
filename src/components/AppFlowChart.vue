<script setup lang="ts">
import { onBeforeUnmount } from 'vue';

import type { Edge, Node } from '@vue-flow/core';
import { useVueFlow, VueFlow } from '@vue-flow/core';

const { fitView } = useVueFlow();

defineProps<{
  nodes: Node[];
  edges: Edge[];
}>();

const resizeHandler = () => {
  fitView();
};

window.addEventListener('resize', resizeHandler);
onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler);
});
</script>

<template>
  <VueFlow
    :nodes="nodes"
    :edges="edges"
    fit-view-on-init
    fit-view
    :nodes-draggable="false"
    :pan-on-drag="false"
    :pan-on-scroll="false"
    :zoom-on-scroll="false"
    :zoom-on-pinch="false"
    :zoom-on-double-click="false"
    :prevent-scrolling="true"
  />
</template>

<style>
/* these are necessary styles for vue flow */
@import '@vue-flow/core/dist/style.css';

.vue-flow__node {
  background: url('@/assets/cubes/empty.svg');
  border: 0;
  background-size: cover;
  width: 50px;
  height: 57px;
  z-index: 1 !important;
}

/* this contains the default theme, these are optional styles */
</style>
