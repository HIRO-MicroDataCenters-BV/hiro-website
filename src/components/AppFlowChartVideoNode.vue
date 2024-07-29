<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const width = computed(() => {
  return props.data?.width || 120;
});
</script>

<template>
  <div
    class="app-flow-chart-video-node"
    :style="{
      width: `${width}px`,
      height: `${width * 0.5625}px`,
    }"
  >
    <div class="app-flow-chart-video-node__video">
      <a
        :href="data.videoFullFileUrl || 'https://youtu.be/dQw4w9WgXcQ'"
        target="_blank"
      >
        <video
          :width="width"
          class="app-flow-chart-video-node__video-element"
          :src="data.videoFile || 'https://www.w3schools.com/html/mov_bbb.mp4'"
          autoplay
          loop
          muted
          playsinline
        >
          Your browser does not support the video tag.
        </video>
      </a>
    </div>
  </div>
</template>

<style scoped>
.app-flow-chart-video-node {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
