import { ROUTES } from '@/router/routes';

export type RoutePaths = (typeof ROUTES)[keyof typeof ROUTES]['path'];

export const CUSTOMERS_ROUTES: RoutePaths[] = [
  ROUTES.INDUSTRY.path,
  ROUTES.ENERGY_GRID.path,
  ROUTES.CITY.path,
  ROUTES.AGRICULTURE.path,
  ROUTES.HEALTH.path,
] as const;
