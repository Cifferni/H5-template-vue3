import { createApp } from 'vue';
import App from './App.vue';
import pinia from '@/store/index';
import VueLazyLoad from 'vue3-lazyload';
import router from '@/router';
import '@/utils/rem';
import '@/assets/styles/reset.scss';
import 'vant/lib/index.css';
import { i18n, setLang } from '@/i18n';
const loadImage = new URL('/src/assets/images/imgLazyLoad.gif', import.meta.url).href;
setLang();
const app = createApp(App);
// 多语
app.use(i18n);
// 引入pinia
app.use(pinia);
// 路由
app.use(router);
// 图片懒加载
app.use(VueLazyLoad, {
  loading: loadImage
});
app.mount('#app');
