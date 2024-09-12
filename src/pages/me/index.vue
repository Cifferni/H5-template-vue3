<template>
  <div class="my_page_container">
    <ThemeSwitch></ThemeSwitch>
    <Field v-model="inputText" is-link readonly :label="$t('setLang.lang')" @click="showPicker = true" />
    <Button size="large" @click="logout">退出登录</Button>
    <Popup v-model:show="showPicker" @click-overlay="cance" round position="bottom">
      <Picker v-model="currentLang" :columns="columns" @cancel="cance" @confirm="onConfirm" />
    </Popup>
  </div>
</template>

<script setup lang="ts">
import ThemeSwitch from '@/components/ThemeSwitch/index.vue';
import { computed, onMounted, ref } from 'vue';
import { Field, Popup, Picker, Button } from 'vant';
import { setLang } from '@/i18n';
import { useI18n } from 'vue-i18n';
import { useLoginStore } from '@/store/modules/login';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'myPage'
});
onMounted(() => {
  const lang = localStorage.getItem('lang');
  if (lang) {
    currentLang.value = lang ? [lang] : ['zh-ch'];
    useLang.value = currentLang.value;
    inputText.value = tm(`setLang["${currentLang.value[0]}"]`);
  }
});
const loginStore = useLoginStore();
const { tm } = useI18n();
const useLang = ref<string[]>(['zh-ch']);
const inputText = ref<string>('中文');
const currentLang = ref<string[]>(['zh-ch']);
const showPicker = ref(false);
const router = useRouter();
const columns = computed((): { text: string; value: string }[] => {
  return [
    { text: tm('setLang["zh-cn"]'), value: 'zh-cn' },
    { text: tm('setLang["en-us"]'), value: 'en-us' }
  ];
});
const onConfirm = ({ selectedValues }: { selectedValues: string[] }) => {
  localStorage.setItem('lang', selectedValues[0]);
  console.log(`setLang["${currentLang.value[0]}"]`);
  showPicker.value = false;
  setLang(selectedValues[0]);
  inputText.value = tm(`setLang["${currentLang.value[0]}"]`);
};
const cance = () => {
  currentLang.value = useLang.value;
  showPicker.value = false;
};
const logout = () => {
  loginStore.clearLoginInfo();
  router.replace('/login');
};
</script>
<style scoped lang="scss">
.my_page_container {
  height: 100%;
  background: var(--bg-color);
  padding: 20px 20px;
}
</style>
