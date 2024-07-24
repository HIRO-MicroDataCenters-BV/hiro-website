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
    :elements-selectable="false"
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

.vue-flow__node--ecs {
  background-image: url('@/assets/cubes/ecs.svg');
}

.vue-flow__node--ecs-ds {
  background-image: url('@/assets/cubes/ecs-ds.svg');
}

.vue-flow__node--ecs-ds-cog {
  background-image: url('@/assets/cubes/ecs-ds-cog.svg');
}

.vue-flow__node--ecs-ds-gov {
  background-image: url('@/assets/cubes/ecs-ds-gov.svg');
}

.vue-flow__node--ecs-ds-cog-gov {
  background-image: url('@/assets/cubes/ecs-ds-cog-gov.svg');
}

.vue-flow__node--ecs-gov {
  background-image: url('@/assets/cubes/ecs-gov.svg');
}
</style>
