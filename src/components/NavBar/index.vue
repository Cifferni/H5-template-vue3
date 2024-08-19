<!--对Vat的NavBar进行二次封装-->
<template>
  <NavBar :="navBarInfo">
    <template #left>
      <slot name="left">
        <div @click="back" style="background: var(--bgcolor)">
          <Icon name="arrow-left" size="18" />
          <span>返回</span>
        </div>
      </slot>
    </template>
  </NavBar>
</template>
<script setup lang="ts">
import { Icon, NavBar } from 'vant';
import { useRouter } from 'vue-router';
import { onBeforeMount, reactive, useAttrs } from 'vue';

interface navBarInfoType {
  title?: string;
  leftArrow?: boolean;

  [key: string]: any;
}

defineOptions({
  name: 'NavBar'
});
const attrs = useAttrs();
let navBarInfo = reactive<navBarInfoType>({});
const router = useRouter();
onBeforeMount(() => {
  getNavBarInfo();
});
const getNavBarInfo = () => {
  // 从路由获取当前页面的title
  navBarInfo.title = router.currentRoute.value.meta.title as string;
  navBarInfo = { ...navBarInfo, ...attrs };
};
const back = () => {
  router.back();
};
</script>
<style scoped lang="scss"></style>
