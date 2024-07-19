<script setup lang="ts">
import AppCardLink from '@/components/AppCardLink.vue';
import { customerCards, joinUsCard } from '@/constants/home-page';
import AppCard from '@/components/AppCard.vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
</script>

<template>
  <div class="home-view-mobile">
    <Carousel
      class="home-view-mobile__swiper"
      :items-to-show="1"
      :items-to-scroll="1"
    >
      <slide
        v-for="(value, index) in Object.values(customerCards)"
        :key="index + value.title"
      >
        <AppCardLink
          class="home-view-mobile__swiper-slide"
          :label="value.title"
          :text="value.description"
          :route="value.route"
        />
      </slide>
      <template #addons>
        <pagination />
      </template>
    </Carousel>
    <AppCard
      class="home-view-mobile__join-us-card"
      :label="joinUsCard.title"
      :text="joinUsCard.description"
      :is-dense="true"
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
}

.home-view-mobile__join-us-card {
  max-width: 366px;
}
</style>

<style>
.carousel__viewport {
  box-shadow: -1px 1px 16px 3px rgba(255, 255, 255, 0.25);
}

.carousel__pagination-button {
  &:after {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    background: var(--color-text);
    border-radius: 50%;
  }
}

.carousel__pagination-button--active:after {
  background: var(--hiro-c-green);
}
</style>
