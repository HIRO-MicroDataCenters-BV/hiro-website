import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'our customers',
      component: HomeView,
    },
    {
      path: '/agriculture',
      name: 'agriculture 3.0',
      component: () => import('../views/AgricultureView.vue'),
    },
    {
      path: '/city',
      name: 'city 2.0',
      component: () => import('../views/CityView.vue'),
    },
    {
      path: '/health',
      name: 'health 3.0',
      component: () => import('../views/HealthView.vue'),
    },
    {
      path: '/industry',
      name: 'industry 4.0',
      component: () => import('../views/IndustryView.vue'),
    },
    {
      path: '/energy-grid',
      name: 'energy grid 3.0',
      component: () => import('../views/EnergyGridView.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/services-view'),
    },
    {
      path: '/playground',
      name: 'playground',
      component: () => import('../views/PlaygroundView.vue'),
    },
  ],
});

export default router;
