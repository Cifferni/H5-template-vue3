import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { reactive, ref } from 'vue';

export const useRouterStore = defineStore('router', () => {
  const router = useRouter();
  const routesList = reactive(router.getRoutes());
  const keepAliveList = ref<string[] | []>([]);
  const getKeepAliveList = () => {
    keepAliveList.value = routesList.reduce((acc: any, item: any) => {
      if (item.meta && item.meta.keepAlive) {
        acc.push(item.name);
      }
      return acc;
    }, []);
  };
  return {
    routesList,
    keepAliveList,
    getKeepAliveList
  };
  // 定义state
});
