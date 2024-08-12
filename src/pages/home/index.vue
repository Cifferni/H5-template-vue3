<template>
  <div class="home_Page">
    <NavBar />
    <div>{{ age }}</div>
    <Button type="success" @click="() => age++">增加</Button>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/index.vue';
import { onMounted, ref } from 'vue';
import { Button } from 'vant';

defineOptions({
  name: 'homePage'
});
onMounted(() => {
});
const age = ref<number>(0);
</script>
<style scoped lang="scss">
.home_Page {
  height: 100%;
  width: 100%;
}
</style>
