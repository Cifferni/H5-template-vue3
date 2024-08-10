import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import routes from './routes';

const router = createRouter({
  // 修改history模式，要不然刷新404,使用HTML5的话需要配置nginx
  history: createWebHashHistory(),
  routes: routes as RouteRecordRaw[],
  scrollBehavior() {
    // 可以在这里还原上次的滚动位置。
    return { top: 0, left: 0 };
  }
});
router.beforeEach((to, from, next) => {
  next();
});
export default router;
