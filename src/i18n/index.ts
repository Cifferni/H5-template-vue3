import { createI18n } from 'vue-i18n';
export function loadLang() {
  const modules: Record<string, any> = import.meta.glob('./lang/*.ts', { eager: true });
  const langObj: Record<string, any> = {};

  for (const path in modules) {
    const name = path.replace(/(\.\/lang\/|\.ts)/g, '').trim();
    langObj[name] = modules[path].default;
  }
  return langObj;
}

export const i18n = createI18n({
  legacy: false,
  locale: 'zh-cn',
  fallbackLocale: 'zh-cn',
  messages: loadLang()
});

export function setLang(locale?: string) {
  if (locale) {
    localStorage.setItem('lang', locale);
    i18n.global.locale.value = locale;
  } else {
    const locale = localStorage.getItem('lang');
    i18n.global.locale.value = locale ? locale : 'zh-cn';
  }
}
