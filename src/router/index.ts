import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes: routes as RouteRecordRaw[],
  scrollBehavior() {
    // 可以在这里还原上次的滚动位置。
    return { top: 0, left: 0 };
  }
});
export default router;
