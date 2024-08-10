import type { CustomRouteRecordRaw } from './customRoutetTypes';

const routes: Array<CustomRouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/pages/layout/index.vue'),
    children: [
      {
        path: 'home',
        name: 'homePage',
        component: () => import('@/pages/home/index.vue'),
        meta: {
          transition: 'slide-left',
          title: '首页',
          keepAlive: true,
          tabBarDetails: {
            name: '首页',
            icon: 'home-o',
            dot: false,
            url: '/home',
            order: 1
          }
        }
      },
      {
        path: 'message',
        name: 'messagePage',
        component: () => import('@/pages/message/index.vue'),
        meta: {
          transition: 'fade',
          title: '消息',
          tabBarDetails: {
            name: '消息',
            icon: 'chat-o',
            dot: false,
            badge: '0',
            url: '/message',
            order: 2
          }
        }
      },
      {
        path: 'me',
        name: 'myPage',
        component: () => import('@/pages/me/index.vue'),
        meta: {
          transition: 'fade',
          title: '我的',
          tabBarDetails: {
            name: '我的',
            icon: 'home-o',
            dot: false,
            url: '/me',
            order: 3
          }
        }
      }
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'notFoundPage', component: () => import('@/pages/notFound/index.vue') }
];
export default routes;
