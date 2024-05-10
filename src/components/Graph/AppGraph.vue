<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import type { Ref } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import Graph from './graph';
import type { NodeNameValue } from './graph';
import { DEV, COLOR } from './constants';

let scene: THREE.Scene;
let camera: THREE.OrthographicCamera;
let renderer: THREE.WebGLRenderer;

const canvasWrapper: Ref<HTMLElement | null> = ref(null);
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

let graph: Graph;

interface Props {
  activeCube: NodeNameValue | null;
}

interface Emits {
  (e: 'change', value: NodeNameValue): void
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

function animate() {
  requestAnimationFrame(animate);

  graph.animate();

  renderer.render(scene, camera);
}

function calcCanvasSize(element: HTMLElement): Array<number> {
  return [element.clientWidth, element.clientWidth];
}

onMounted(() => {
  if (canvasWrapper.value === null)
    throw new Error('canvasWrapper.value is null');

  scene = new THREE.Scene();

  // Camera
  const width = 8.4;
  const height = 8.4;
  camera = new THREE.OrthographicCamera(
    width / -2,
    width / 2,
    height / 2,
    height / -2,
    1,
    100,
  );
  camera.position.set(0, 7, 10);
  camera.lookAt(0, 0, 0);

  // Renderer
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  const canvasSize = calcCanvasSize(canvasWrapper.value);
  renderer.setSize(canvasSize[0], canvasSize[1]);
  canvasWrapper.value.appendChild(renderer.domElement);

  if (DEV) {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    const axesHelper = new THREE.AxesHelper(1);
    scene.add(axesHelper);
  }

  // Light
  const light1 = new THREE.AmbientLight(COLOR.white);
  scene.add(light1);

  const light2 = new THREE.DirectionalLight(COLOR.white, 5);
  light2.position.set(0, 5, 1);
  scene.add(light2);

  const light3 = new THREE.DirectionalLight(COLOR.white, 3);
  light3.position.set(-5, 0, 1);
  scene.add(light3);

  // Graph
  graph = new Graph();
  graph.create();
  if (props.activeCube) {
    graph.setActive(graph.getCubeByName(props.activeCube));
  }
  scene.add(graph.getGraph());

  // Animation
  animate();
});

function resizeHandler() {
  if (canvasWrapper.value !== null) {
    const canvasSize = calcCanvasSize(canvasWrapper.value);
    renderer.setSize(canvasSize[0], canvasSize[1]);
  }
}

function onMouseMove(event: MouseEvent) {
  const canvasBounds = renderer.domElement.getBoundingClientRect();
  mouse.x =
    ((event.clientX - canvasBounds.left) /
      (canvasBounds.right - canvasBounds.left)) *
      2 -
    1;
  mouse.y =
    -(
      (event.clientY - canvasBounds.top) /
      (canvasBounds.bottom - canvasBounds.top)
    ) *
      2 +
    1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(graph.getCubes());

  if (intersects.length > 0) {
    document.body.style.cursor = 'pointer';
  } else if (document.body.style.cursor !== 'default') {
    document.body.style.cursor = 'default';
  }
}

function onMouseClick() {
  const cubes = graph.getCubes();

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(cubes);

  if (intersects.length > 0) {
    cubes.forEach((cube) => {
      graph.setInactive(cube);
    });

    for (let i = 0; i < intersects.length; i++) {
      const cube = intersects[i].object as THREE.Mesh;
      const nodeName = cube.name;
      if (nodeName) {
        graph.setActive(cube);
        emit('change', nodeName);
      }
    }
  }
}

window.addEventListener('resize', resizeHandler);
onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler);
});
</script>

<template>
  <div
    class="graph"
    ref="canvasWrapper"
    @click="onMouseClick"
    @mousemove="onMouseMove"
  ></div>
</template>
