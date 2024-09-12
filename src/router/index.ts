import { createRouter, createWebHashHistory } from 'vue-router';
import { constRoutes } from './routes';
// import {} from '@/store/modules/themeStore';
const router = createRouter({
  // 修改history模式，要不然刷新404,使用HTML5的话需要配置nginx
  history: createWebHashHistory(),
  routes: constRoutes,
  scrollBehavior() {
    // 可以在这里还原上次的滚动位置。
    return { top: 0, left: 0 };
  }
});
router.beforeEach((to, from, next) => {
  const token = window.localStorage.getItem('token');
  if (token) {
    if (to.path === '/login') {
      next('/');
    } else {
      next();
    }
  } else {
    if (to.path !== '/login') {
      next('/login');
    }
    next();
  }
});
export default router;
