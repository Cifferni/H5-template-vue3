const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/pages/layout/index.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/pages/home/index.vue'),
        meta: {
          transition: 'slide-left',
          title: '首页',
          keepAlive: true,
          tabBarDetails: {
            icon: 'home-o',
            dot: false,
            order: 1
          }
        }
      },
      {
        path: 'message',
        name: 'message',
        component: () => import('@/pages/message/index.vue'),
        meta: {
          transition: 'fade',
          title: '消息',
          tabBarDetails: {
            icon: 'chat-o',
            dot: false,
            order: 2
          }
        }
      },
      {
        path: 'me',
        name: 'me',
        component: () => import('@/pages/me/index.vue'),
        meta: {
          transition: 'fade',
          title: '我的',
          tabBarDetails: {
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
