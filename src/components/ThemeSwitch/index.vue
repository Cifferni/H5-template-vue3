<template>
  <Field v-model="themeText" is-link readonly :label="$t('theme.themeTitle')" @click="showPicker = true" />
  <Popup v-model:show="showPicker" round position="bottom" @click-overlay="cancelThemePicker">
    <Picker v-model="selectedThemes" :columns="themeList" @cancel="cancelThemePicker" @confirm="onConfirmTheme" />
  </Popup>
</template>
<script setup lang="ts">
import { Field, Picker, Popup } from 'vant';
import { storeToRefs } from 'pinia';
import { useThemeStore, type themeItemType } from '@/store/modules/themeStore';
import { computed, onMounted, ref } from 'vue';

defineOptions({
  name: 'ThemeSwitch'
});
onMounted(() => {
  selectedThemes.value = currentThemeValue.value;
});
const { setTheme } = useThemeStore();
const { themeList, currentThemeValue } = storeToRefs(useThemeStore());
const selectedThemes = ref<string[]>(['light']);
// 主题选择器显示
const showPicker = ref(false);
const themeText = computed(
  () => themeList.value.find((item: themeItemType) => item.value === currentThemeValue.value[0])?.text
);
//  确定选择主题
const onConfirmTheme = ({ selectedValues }: { selectedValues: string[] }) => {
  const theme = [selectedValues[0]];
  setTheme(theme);
  showPicker.value = false;
};
// //关闭主题选择器
const cancelThemePicker = () => {
  showPicker.value = false;
  selectedThemes.value = currentThemeValue.value;
};
</script>
<style scoped lang="scss"></style>
