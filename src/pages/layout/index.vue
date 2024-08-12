<template>
  <div class="layout-container">
    <div class="content">
      <router-view v-slot="{ Component }">
        <transition :name="transitionClass" mode="out-in">
          <keep-alive :include="keepAliveList">
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
    <Tab-bar></Tab-bar>
  </div>
</template>
<script lang="ts" setup>
import TabBar from '@/components/Tabar/Tabar.vue';
import { useRoute } from 'vue-router';
import { watchEffect, ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouterStore } from '@/store/routerStore';

defineOptions({
  name: 'layoutPage'
});
onMounted(() => {
  getKeepAliveList();
});
const routerStore = useRouterStore();
const { keepAliveList } = storeToRefs(routerStore);

const { getKeepAliveList } = routerStore;
const transitionClass = ref<string>('');
const route = useRoute();
watchEffect(() => {
  if (route.meta && route?.meta.transition) {
    transitionClass.value = route.meta.transition as string;
  } else {
    transitionClass.value = '';
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/transitions/slide.scss';

.layout-container {
  height: 100%;
  width: 100%;

  .content {
    height: calc(100% - 50px);
    overflow: auto;
  }
}
</style>
