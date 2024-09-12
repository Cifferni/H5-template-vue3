<template>
  <div class="test_components">
    <div style="color: #ca4782">{{ name }}</div>
    <div class="box_border">
      <div class="title">演示v-model 传参</div>
      <div>是否显示：{{ model }}</div>
      <Button size="small" type="success" @click="model = false">隐藏</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineModel, ref } from 'vue';
import { Button } from 'vant';
defineOptions({
  name: 'child1-component'
});
const name = ref<string>('我是子组件1');
const model = defineModel();
defineExpose({
  name
});
</script>

<style scoped lang="scss">
$fontSize: 15px;
$bgColor: #99caed;

.test_components {
  font-size: $fontSize;
  background: $bgColor;
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;
  .box_border {
    border: 1px red dashed;
    border-radius: 5px;
    margin-top: 10px;
    padding: 10px 0 10px 10px;
    box-sizing: border-box;
  }
  div {
    margin-bottom: 4px;
  }
  .title {
    font-size: 15px;
    color: #131cd6;
  }
}
</style>
