import { createApp } from 'vue';
import App from './App.vue';
import { banConsole } from '@/utils';
import { createPinia } from 'pinia';
import router from '@/router';
import '@/utils/rem';
import '@/assets/styles/reset.scss';
import 'vant/lib/index.css';

const pinia = createPinia();
export default pinia;
banConsole();

createApp(App).use(pinia).use(router).mount('#app');
