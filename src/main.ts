import { createApp } from 'vue';
import App from './App.vue';
import pinia from '@/store/index';
// import VueLazyLoad from 'vue3-lazyload';
import router from '@/router';
import '@/utils/rem';
import '@/assets/styles/reset.scss';
import 'vant/lib/index.css';
import { i18n, setLang } from '@/i18n';
import '@/utils/emitter';
setLang();
const app = createApp(App);
// 多语
app.use(i18n);
// 引入pinia
app.use(pinia);
// 路由
app.use(router);
app.mount('#app');
