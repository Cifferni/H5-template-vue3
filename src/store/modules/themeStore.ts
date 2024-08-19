import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export interface themeItemType {
  text: string;
  value: string;
}

export const useThemeStore = defineStore('theme', () => {
  const matchMediaChange = ref<boolean>(false);
  const { t } = useI18n();
  const currentThemeValue = ref<string[]>(['light']);
  const isSystemDark = matchMedia('(prefers-color-scheme: dark)');
  // 主题列表
  const themeList = computed(() => [
    {
      text: t('theme.light'),
      value: 'light'
    },
    {
      text: t('theme.dark'),
      value: 'dark'
    },
    {
      text: t('theme.red'),
      value: 'red'
    },
    {
      text: t('theme.auto'),
      value: 'auto'
    }
  ]);
  const setTheme = (themeValue: string[]) => {
    localStorage.setItem('theme', themeValue[0]);
    currentThemeValue.value = themeValue;
    if (themeValue[0] === 'auto') {
      autoTheme();
      return;
    }
    cancelChangeListener();
    setBodyThemeProperty(themeValue[0]);
  };
  const autoTheme = () => {
    if (matchMediaChange.value) return;
    matchMediaChange.value = true;
    const darkTheme = isSystemDark.matches;
    setBodyThemeProperty(darkTheme ? 'dark' : 'light');
    isSystemDark.onchange = function (event) {
      setBodyThemeProperty(event.matches ? 'dark' : 'light');
    };
  };
  const cancelChangeListener = () => {
    isSystemDark.onchange = null;
    matchMediaChange.value = false;
  };
  const setBodyThemeProperty = (theme: string) => {
    let bodyNode: HTMLHtmlElement | null = document.getElementsByTagName('html')[0];
    bodyNode.setAttribute('theme', theme);
    bodyNode = null;
  };
  const initBodyTheme = () => {
    const result = localStorage.getItem('theme');
    setTheme(result ? [result] : ['light']);
  };
  return {
    themeList,
    setTheme,
    currentThemeValue,
    initBodyTheme
  };
});
