<script setup lang="ts">
import AppCardLink from '@/components/AppCardLink.vue';
import { customerCards, joinUsCard } from '@/constants/home-page';
import AppCard from '@/components/AppCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const spaceBetween = 10;
const onProgress = (e) => {
  const [swiper, progress] = e.detail;
  console.log(progress);
};

const onSlideChange = () => {
  console.log('slide changed');
};
</script>

<template>
  <div class="home-view-mobile">
    <swiper
      :slides-per-view="1"
      :space-between="50"
      class="home-view-mobile__swiper"
      @swiperprogress="onProgress"
      @swiperslidechange="onSlideChange"
    >
      <swiper-slide
        v-for="(value, index) in Object.values(customerCards)"
        :key="index + value.title"
        class="home-view-mobile__swiper-slide"
      >
        <AppCardLink
          :label="value.title"
          :text="value.description"
          :route="value.route"
        />
      </swiper-slide>
    </swiper>
    <AppCard
      :label="joinUsCard.title"
      :text="joinUsCard.description"
    />
  </div>
</template>

<style scoped>
.home-view-mobile {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;

  @media (--breakpoint-tablet-large) {
    display: none;
  }
}

.home-view-mobile__swiper {
  max-width: 366px;

  @media (--breakpoint-tablet-large) {
    display: none;
  }
}

.home-view-mobile__swiper-slide {
  @media (--breakpoint-tablet-large) {
    display: none;
    visibility: hidden;
  }
}
</style>
