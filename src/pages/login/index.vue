<template>
  <div class="loginPage">
    <div class="title">Hello</div>
    <CellGroup inset style="margin-top: 30px; background-color: transparent">
      <Field v-model="userName" left-icon="manager-o" placeholder="请输入用户名" />
      <Field v-model="password" type="password" left-icon="closed-eye" placeholder="请输入密码" />
    </CellGroup>
    <Button class="login_btn" size="large" type="primary" @click="goLogin">登录</Button>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Field, CellGroup, Button, showToast } from 'vant';
import { ref } from 'vue';
import { useLoginStore } from '@/store/modules/login';
// import type { ILoginParams } from '@/api/modules/login';
defineOptions({
  name: 'loginPage'
});
const userName = ref<string>('');
const password = ref<string>('');
const loginStore = useLoginStore();
const router = useRouter();
const goLogin = async () => {
  if (!userName.value) {
    showToast({
      teleport: '.loginPage',
      message: '请输入用户名',
      position: 'top'
    });
    return;
  }
  if (!password.value) {
    showToast({
      teleport: '.loginPage',
      message: '请输入用密码',
      position: 'top'
    });
    return;
  }
  try {
    let res = await loginStore.login({
      username: userName.value,
      password: password.value
    });
    await loginStore.getUserInfo(res.data.token);
    await router.replace({ name: 'homePage' });
  } catch (err: any) {
    showToast({
      teleport: '.loginPage',
      message: err.message,
      position: 'top'
    });
  }
};
</script>
<style scoped lang="scss">
.loginPage {
  height: 100%;
  width: 100vw;
  background: url('@/assets/images/login/loginBg.jpg') 0 0 /100% 100% no-repeat;
  overflow: hidden;
  .title {
    margin-top: 150px;
    text-align: center;
  }
  .van-field {
    background-color: transparent;
  }
  .login_btn {
    width: 9.267rem;
    display: block;
    margin: 20px auto 0;
  }
  :deep(.van-toast--top) {
    top: 50px !important;
  }
}
</style>
