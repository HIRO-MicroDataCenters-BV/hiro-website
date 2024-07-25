<script setup lang="ts">
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="app-flow-chart-video-node">
    <div class="app-flow-chart-video-node__video">
      <a
        :href="data.videoFullFileUrl || 'https://youtu.be/dQw4w9WgXcQ'"
        target="_blank"
      >
        <video
          width="80"
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
.app-flow-chart-video-node__video {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(80px * 0.5625);
  width: 80px;
}
</style>
