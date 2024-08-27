# h5-template-vue

在学习vue3过程中写了写了一套vue3+typeScript+vant的h5模板

* vue3+typeScript+vite
* Sass预解析 
* VantUI
* 多环境变量
* rem适配方案
* vue-i18n多语种
* css变量多种主题切换
* pinia状态管理
* esLint+Pettier 代码风格统一
## 编译和热重载开发
```sh
 yarn dev
```
## 切换不同的运行环境
```sh
yarn dev 
```
## 打包
```sh
# 生产环境
yarn build-pro
# 测试环境
yarn build-test
# 开发环境
yarn build-dev
```
## 提交校验
```text
feat // 增加新功能
fix // 修复bug
docs // 只改动了文档相关的内容
style // 不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
refactor // 代码重构时使用
test // 添加测试或者修改现有测试
build // 构造工具的或者外部依赖的改动，例如webpack，npm
chore // 不修改src或者test的其他修改，例如构建过程或辅助工具的变更
revert // 执行git revert打印的message
pref // 提升性能的改动
merge // 代码合并
例如： git commit -m"style: 格式化"
```
## 移动端适配
postcss-pxtorem px自动转成rem 

```ts
import postcssPxToRem from 'postcss-pxtorem';
// vite.config.ts 配置
export default defineConfig(({ mode }) => {
   return{
     css: {
       postcss: {
         plugins: [
           // px自动转成rem
           postcssPxToRem({
             rootValue: 37.5, // UI设计稿的宽度/10
             unitPrecision: 3, // 转rem精确到小数点多少位
             propList: ['*', '!border*', '!border-radius'], // 需要转换的属性 *表示所有
             selectorBlackList: ['ignore'], // 不进行px转换的选择器
             replace: true, // 是否直接更换属性值，而不添加备用属性
             mediaQuery: false, // 是否在媒体查询的css代码中也进行转换
             minPixelValue: 0, // 设置要替换的最小像素值
             exclude: /node_modules/i // 排除node_modules文件夹下的文件
           })
         ]
       }
     }
   }
});
```
## 包体积分析工具
```ts
import { visualizer } from 'rollup-plugin-visualizer';
// vite.config.ts 配置
 plugins: [visualizer({
  open: true,
  filename: 'stats.html',
  emitFile: false
})]
```
## 图片压缩
```js
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
// vite.config.ts 配置
plugins: [ ViteImageOptimizer({
  jpg: {
    quality: 50
  },
  png: {
    quality: 50
  }
})]
```
## proxy 跨域
```
    server: {
      proxy: {
        '^/api/.*': {
          target: env.parsed.VITE_APP_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
```
## 环境区分
#### 由自定义了env的目录,原本获取环境变量的方法不能用了请使用dotenv;
```ts
import * as dotenv from 'dotenv';
export default defineConfig(({ mode }) => {
  const env = dotenv.config({ path: `./env/.env.${mode}` });
   return{
     envDir:'./env'
   }
});
```

## 路由配置
```ts
const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/pages/layout/index.vue'),
    children: [
      {
        path: 'home', 
        name: 'home', // 必须跟组件名一样可以参考home页面
        component: () => import('@/pages/home/index.vue'),
        meta: {
          transition: 'slide-left', // 过度,不写就会生效
          title: '首页',  
          keepAlive: true, // 是否一直存活
          tabBarDetails: { // 有这个属性就添加到tabBar底部导航里
            icon: 'home-o', //图标
            dot: false, //图标显示点
            order: 1 // 显示顺序
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
            dot: true,
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
```

## 目录结构
```tree
h5-template-vue
├── dist
│   ├── assets
│   │   ├── css
│   │   │   ├── index-CKONVl4E.css
│   │   │   ├── index-COXPhkR7.css
│   │   │   ├── index-CRq3S5CD.css
│   │   │   ├── index-CoPZUEZB.css
│   │   │   └── index-DihN1dNh.css
│   │   ├── gif
│   │   │   └── imgLazyLoad-NI4BL0Vw.gif
│   │   └── jpg
│   │       ├── 0c0f3f16880511ebb6edd017c2d2eca2-D9_Vnrum.jpg
│   │       ├── 2c09c340e57a4963ba60fdc0d809db8b-9y793Uoe.jpg
│   │       ├── 40f7d1d689ca47d091bd3eb02206fd08-Co0kQUR9.jpg
│   │       ├── 49f33642275045f0b614f6c35ac067cf-BcVcYq1R.jpg
│   │       └── 964f6b8b8a0e4ce8971c858e97c2cb5f-Ch_bTO2e.jpg
│   ├── js
│   │   ├── index-BoK6-u1v.js
│   │   ├── index-CJOFtlDo.js
│   │   ├── index-CNMrGEFA.js
│   │   ├── index-CWvXn5eb.js
│   │   ├── index-DWIq8bZK.js
│   │   ├── index-Dq_Xg9nO.js
│   │   ├── index-HbP2L45q.js
│   │   ├── index-t3n57mBK.js
│   │   ├── themeStore-DKvQqw8N.js
│   │   ├── use-id---tzgPn9.js
│   │   └── with-install-BQn54CXs.js
│   └── index.html
├── env
├── public
├── src
│   ├── api
│   │   └── axios.ts
│   ├── assets
│   │   ├── images
│   │   │   ├── home
│   │   │   │   ├── 0c0f3f16880511ebb6edd017c2d2eca2.jpg
│   │   │   │   ├── 2c09c340e57a4963ba60fdc0d809db8b.jpg
│   │   │   │   ├── 40f7d1d689ca47d091bd3eb02206fd08.jpg
│   │   │   │   ├── 49f33642275045f0b614f6c35ac067cf.jpg
│   │   │   │   └── 964f6b8b8a0e4ce8971c858e97c2cb5f.jpg
│   │   │   └── imgLazyLoad.gif
│   │   ├── styles
│   │   │   └── reset.scss
│   │   ├── theme
│   │   │   ├── dark.scss
│   │   │   ├── light.scss
│   │   │   └── red.scss
│   │   └── transitions
│   │       └── slide.scss
│   ├── components
│   │   ├── NavBar
│   │   │   └── index.vue
│   │   ├── Tabar
│   │   │   └── index.vue
│   │   └── ThemeSwitch
│   │       └── index.vue
│   ├── hook
│   ├── i18n
│   │   ├── lang
│   │   │   ├── en-us.ts
│   │   │   ├── langType.ts
│   │   │   └── zh-cn.ts
│   │   └── index.ts
│   ├── pages
│   │   ├── home
│   │   │   └── index.vue
│   │   ├── layout
│   │   │   └── index.vue
│   │   ├── me
│   │   │   └── index.vue
│   │   ├── message
│   │   │   └── index.vue
│   │   └── notFound
│   │       └── index.vue
│   ├── router
│   │   ├── index.ts
│   │   └── routes.ts
│   ├── store
│   │   ├── modules
│   │   │   ├── routerStore.ts
│   │   │   └── themeStore.ts
│   │   └── index.ts
│   ├── utils
│   │   ├── index.ts
│   │   └── rem.ts
│   ├── App.vue
│   └── main.ts
├── README.md
├── commitlint.config.cjs
├── env.d.ts
├── index.html
├── package.json
├── stats.html
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```
