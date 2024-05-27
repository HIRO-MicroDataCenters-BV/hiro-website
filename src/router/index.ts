import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/agriculture',
      name: 'agriculture 3.0',
      component: () => import('../views/PlaygroundView.vue'),
    },
    {
      path: '/city',
      name: 'city 2.0',
      component: () => import('../views/PlaygroundView.vue'),
    },
    {
      path: '/health',
      name: 'health 3.0',
      component: () => import('../views/PlaygroundView.vue'),
    },
    {
      path: '/industry',
      name: 'industry 4.0',
      component: () => import('../views/PlaygroundView.vue'),
    },
    {
      path: '/energy-grid',
      name: 'energy grid 3.0',
      component: () => import('../views/PlaygroundView.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
    },
    {
      path: '/playground',
      name: 'playground',
      component: () => import('../views/PlaygroundView.vue'),
    },
  ],
});

export default router;
