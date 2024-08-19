import { createApp } from 'vue';
import App from './App.vue';

import VueLazyLoad from 'vue3-lazyload';
import { createPinia } from 'pinia';
import router from '@/router';
import '@/utils/rem';
import '@/assets/styles/reset.scss';
import 'vant/lib/index.css';

const loadImage = new URL('/src/assets/images/imgLazyLoad.gif', import.meta.url).href;
console.log(loadImage);
const pinia = createPinia();
export default pinia;
createApp(App).use(pinia).use(router).use(VueLazyLoad, {
  loading: loadImage
}).mount('#app');
