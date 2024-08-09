import type { RouteMeta, RouteRecordRaw } from 'vue-router';

export interface TabBarDetails {
  name: string;
  icon: string;
  dot: boolean;
  url: string;
  order: number;
  badge: string;
}

export interface CustomRouteMeta extends RouteMeta {
  title: string;
  transition?: string;
  tabBarDetails?: TabBarDetails;
}

export interface CustomRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  meta?: CustomRouteMeta;
}
