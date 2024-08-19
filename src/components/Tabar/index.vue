<template>
  <div>
    <Tabbar v-model="active" @change="switchingRoute">
      <Tabbar-item v-for="(item, index) in tabBarItemList" :key="item.name" :name="index">
        <span>{{ $t(`tabBar.${item.name}`) }}</span>
        <template #icon>
          <Icon :name="item.meta.tabBarDetails.icon" />
        </template>
      </Tabbar-item>
    </Tabbar>
  </div>
</template>
<script lang="ts" setup>
import { Tabbar, TabbarItem, Icon } from 'vant';
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';

let tabBarItemList = ref<any[]>([]);
let active = ref<number>(0);
const router = useRouter();
defineOptions({
  name: 'tab-bar'
});

onBeforeMount(() => {
  getTabBarItem();
  setActive();
});
const getTabBarItem = () => {
  tabBarItemList.value = router.getRoutes().reduce((acc: any, item: any) => {
    if (item.meta && item.meta.tabBarDetails) {
      acc.push(item);
    }
    return acc;
  }, []);
};

const switchingRoute = (name: number) => {
  router.replace({ name: tabBarItemList.value[name].name });
};
const setActive = () => {
  active.value = tabBarItemList.value.findIndex((item) => {
    return item.name === router.currentRoute.value.name;
  });
};
</script>
<style scoped lang="scss"></style>
