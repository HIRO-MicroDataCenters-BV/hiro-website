import { createRouter, createWebHistory } from 'vue-router';
import { ROUTES } from '@/router/routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Object.values(ROUTES),
});

export default router;
