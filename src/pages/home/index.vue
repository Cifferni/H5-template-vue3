<template>
  <div class="home_Page">
    <NavBar />
    <div>{{ age }}</div>
    <div @click="() => age++">++</div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/index.vue';
import { onMounted, ref } from 'vue';

defineOptions({
  name: 'homePage'
});
onMounted(() => {});
const age = ref<number>(0);
</script>
<style scoped lang="scss">
.home_Page {
  background: pink;
  height: 100%;
  width: 100%;
}
</style>
