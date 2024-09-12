<template>
  <div class="test_components">
    <div style="color: #ca4782">{{ name }}</div>
    <div class="box_border">
      <div class="title">获取parent</div>
      <Button size="small" type="success" @click="HiddenChild1($parent)">隐藏Child1</Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Button } from 'vant';

defineOptions({
  name: 'child2-component'
});
const name = ref<string>('我是子组件2');
const HiddenChild1 = ($parent: any) => {
  console.log($parent);
  $parent.isShow = false;
};
defineExpose({
  name
});
</script>

<style scoped lang="scss">
$fontSize: 15px;
$bgColor: #e6e19b;

.test_components {
  font-size: $fontSize;
  background: $bgColor;
  width: 100%;
  min-height: 150px;
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
