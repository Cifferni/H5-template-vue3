<template>
  <router-view></router-view>
</template>
<script setup lang="ts">
import { useThemeStore } from '@/store/modules/themeStore';

const themeStore = useThemeStore();
themeStore.initBodyTheme();
</script>
<style lang="scss">
html,
body,
#app {
  height: 100%;
}

body {
  background: var(--bg-color);
}
</style>
