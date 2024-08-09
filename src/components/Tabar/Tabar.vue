<template>
  <div>
    <Tabbar v-model="active" @change="switchingRoute">
      <Tabbar-item v-for="(item, index) in tabBarItemList" :key="item.name" :name="index">
        <span>{{ item.name }}</span>
        <template #icon>
          <Icon :name="item.icon" />
        </template>
      </Tabbar-item>
    </Tabbar>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { Tabbar, TabbarItem, Icon } from 'vant';
import { reactive, watchEffect, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import type { TabBarDetails } from '@/router/customRoutetTypes.ts';

let tabBarItemList = reactive<TabBarDetails[]>([]);
let active = ref<number>(0);
const router = useRouter();
defineOptions({
  name: 'tab-bar'
});

onBeforeMount(() => {
  setActive();
});

function getTabBarItem(): Array<TabBarDetails> {
  return router.getRoutes().reduce((acc: any, item: any) => {
    if (item.meta && item.meta.tabBarDetails) {
      acc.push(item.meta.tabBarDetails);
    }
    return acc;
  }, []);
}

const switchingRoute = (name: number) => {
  router.replace(tabBarItemList[name].url);
};
const setActive = () => {
  active.value = tabBarItemList.findIndex((item) => item.url === router.currentRoute.value.path);
};
watchEffect(() => {
  tabBarItemList = getTabBarItem();
});
</script>
<style scoped lang="scss"></style>
