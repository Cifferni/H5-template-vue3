<template>
  <div class="message_page">
    <div>父组件</div>
    <div>组件存活年龄：{{ age }}</div>
    <div>是否显示子1组件：{{ isShow }}</div>
    <br />
    <Button class="showChild" size="small" type="success" @click="isShow = true">显示子组件1</Button>
    <br />
    <Button class="showChild" size="small" type="success" @click="console.log(child1Ref)">输出子组件1</Button>
    <br />
    <Button class="showChild" size="small" type="success" @click="getAll($refs)">获取多有的子组件</Button>
    <child1Components v-model="isShow" ref="child1" />
    <child2Components ref="child2" />
    <!--    <Button type="success" @click="addroute">增加路由</Button>-->
  </div>
</template>
<script setup lang="ts">
import {
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onUnmounted,
  onUpdated,
  ref
} from 'vue';
import { Button } from 'vant';
// import { useRouter } from 'vue-router';
import emitter from '@/utils/emitter';
import child1Components from '@/components/child/index.vue';
import child2Components from '@/components/child2/index.vue';
// const router = useRouter();
const isShow = ref<boolean>(true);
const age = ref<number>(0);
const child1Ref = ref();
// const child2Ref = ref();
defineOptions({
  name: 'messagePage'
});
emitter.on('test', (data) => {
  console.log(data);
});
const getAll = ($refs: { [key: string]: any }) => {
  // 特殊参数获取声明的多有的子组件
  console.log($refs);
};

onBeforeMount(() => {
  console.log('创建虚拟DOM完毕，接下来挂载DOM树');
});
onMounted(() => {
  console.log('挂载完毕');
  age.value++;
});
onActivated(() => {
  age.value++;
  console.log('页面被激活了');
});
onDeactivated(() => {
  console.log('页面失活了');
});
onBeforeUpdate(() => {
  console.log('数据更新完毕，但是页面还没有更新');
});
onUpdated(() => {
  console.log('数据更新完毕，页面更新完毕');
});
onBeforeUnmount(() => {
  console.log('页面卸载之前，还是可以访问数据');
});
onUnmounted(() => {
  emitter.off('test');
  console.log('页面已经卸载了');
});
onErrorCaptured((error) => {
  console.log(error);
});
defineExpose({
  isShow
});
</script>
<style scoped lang="scss">
.message_page {
  height: 100%;
  width: 100%;
  font-size: 16px;
  background: var(--bg-color);
  color: var(--text-color);
  .showChild {
    margin-bottom: 10px;
  }
}
</style>
