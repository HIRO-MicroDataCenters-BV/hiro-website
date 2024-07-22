import HomeView from '@/views/home-view';

export const ROUTES = {
  HOME: {
    path: '/',
    name: 'our customers',
    component: HomeView,
  },
  AGRICULTURE: {
    path: '/agriculture',
    name: 'agriculture 3.0',
    component: () => import('../views/AgricultureView.vue'),
  },
  CITY: {
    path: '/city',
    name: 'city 2.0',
    component: () => import('../views/CityView.vue'),
  },
  HEALTH: {
    path: '/health',
    name: 'health 3.0',
    component: () => import('../views/HealthView.vue'),
  },
  INDUSTRY: {
    path: '/industry',
    name: 'industry 4.0',
    component: () => import('../views/IndustryView.vue'),
  },
  ENERGY_GRID: {
    path: '/energy-grid',
    name: 'energy grid 3.0',
    component: () => import('../views/EnergyGridView.vue'),
  },
  SERVICES: {
    path: '/services',
    name: 'services',
    component: () => import('../views/services-view'),
  },
} as const;
