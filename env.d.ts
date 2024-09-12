/// <reference types="vite/client" />
declare module '*.vue' {
  import { ComponentOptions } from 'vue';
  const componentOptions: ComponentOptions;
  export default componentOptions;
}

interface ImportMetaEnv {
  readonly VITE_APP_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module 'vuex' {
  export * from 'vuex/types/index.d.ts';
  export * from 'vuex/types/helpers.d.ts';
  export * from 'vuex/types/logger.d.ts';
  export * from 'vuex/types/vue.d.ts';
}
declare module 'lodash' {
  export { debounce } from 'lodash';
}
