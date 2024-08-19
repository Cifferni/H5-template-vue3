<template>
  <div class="home_Page">
    <Swipe :loop="false" >
      <SwipeItem v-for="(item, index) in imageList" :key="index">
        <img v-lazy="item"  class="swipe_image"  alt=""/>
      </SwipeItem>
    </Swipe>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { Swipe, SwipeItem } from 'vant';

onMounted(() => {
  console.log(import.meta.url);
});
const imageList = reactive<string[]>([
  new URL('/src/assets/images/home/0c0f3f16880511ebb6edd017c2d2eca2.jpg', import.meta.url).href,
  new URL('/src/assets/images/home/2c09c340e57a4963ba60fdc0d809db8b.jpg', import.meta.url).href,
  new URL('/src/assets/images/home/40f7d1d689ca47d091bd3eb02206fd08.jpg', import.meta.url).href,
  new URL('/src/assets/images/home/49f33642275045f0b614f6c35ac067cf.jpg', import.meta.url).href,
  new URL('/src/assets/images/home/964f6b8b8a0e4ce8971c858e97c2cb5f.jpg', import.meta.url).href
]);
defineOptions({
  name: 'homePage'
});

</script>
<style scoped lang="scss">
.home_Page {
  height: 100%;
  width: 100%;
  .swipe_image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
}
</style>
