<template>
  <div class="home_Page">
    <PullRefresh v-model="refreshing" style="width: 100%; height: 100%; overflow-y: auto" @refresh="onRefresh">
      <Swipe :autoplay="3000">
        <SwipeItem v-for="(item, index) in imageList" :key="index">
          <img :src="item" class="swipe_image" alt="" />
        </SwipeItem>
      </Swipe>
      <List v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <Cell v-for="item in list" :key="item" :title="item" />
      </List>
      <BackTop right="6vw" bottom="15vh" />
    </PullRefresh>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Swipe, SwipeItem, PullRefresh, List, Cell, BackTop } from 'vant';
defineOptions({
  name: 'homePage'
});
const imageList = reactive<string[]>([
  new URL('/src/assets/images/home/0c0f3f16880511ebb6edd017c2d2eca2.jpg', import.meta.url).href,
  new URL('/src/assets/images/home/2c09c340e57a4963ba60fdc0d809db8b.jpg', import.meta.url).href,
  new URL('/src/assets/images/home/40f7d1d689ca47d091bd3eb02206fd08.jpg', import.meta.url).href,
  new URL('/src/assets/images/home/49f33642275045f0b614f6c35ac067cf.jpg', import.meta.url).href,
  new URL('/src/assets/images/home/964f6b8b8a0e4ce8971c858e97c2cb5f.jpg', import.meta.url).href
]);
const refreshing = ref<boolean>(false);
const loading = ref(false);
const finished = ref(false);
const list = ref<any[]>([]);
const onLoad = () => {
  setTimeout(() => {
    if (refreshing.value) {
      list.value = [];
      refreshing.value = false;
    }

    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1);
    }
    loading.value = false;

    if (list.value.length >= 40) {
      finished.value = true;
    }
  }, 1000);
};

const onRefresh = () => {
  // 清空列表数据
  finished.value = false;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  onLoad();
};
</script>
<style scoped lang="scss">
.home_Page {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  background: var(--bg-color);
  color: var(--text-color);
  .swipe_image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
  }
}
</style>
