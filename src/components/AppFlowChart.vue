<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';

import type { Edge, Node } from '@vue-flow/core';
import { useVueFlow, VueFlow } from '@vue-flow/core';

const { fitView } = useVueFlow();

const resizeHandler = () => {
  fitView();
};

window.addEventListener('resize', resizeHandler);
onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler);
});

const nodes = ref<Node[]>([
  // an input node, specified by using `type: 'input'`
  {
    id: '1',
    type: 'input',
    position: { x: 250, y: 5 },
    // all nodes can have a data object containing any data you want to pass to the node
    // a label can property can be used for default nodes
    data: { label: 'Node 1' },
  },

  // default node, you can omit `type: 'default'` as it's the fallback type
  {
    id: '2',
    position: { x: 100, y: 100 },
    data: { label: 'Node 2' },
  },

  // An output node, specified by using `type: 'output'`
  {
    id: '3',
    type: 'output',
    position: { x: 400, y: 200 },
    data: { label: 'Node 3' },
  },
]);

const edges = ref<Edge[]>([
  // default bezier edge
  // consists of an edge id, source node id and target node id
  {
    id: 'e1->2',
    source: '1',
    target: '2',
    animated: true,
  },

  // set `animated: true` to create an animated edge path
  {
    id: 'e2->3',
    source: '2',
    target: '3',
    animated: true,
  },
]);
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

/* this contains the default theme, these are optional styles */
@import '@vue-flow/core/dist/theme-default.css';
</style>
