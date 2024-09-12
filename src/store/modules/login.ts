import { defineStore } from 'pinia';
import { ref } from 'vue';
import { loginServe, type ILoginParams, getUserInfoServe } from '@/api/modules/login';
import type { AxiosResponse } from 'axios';

export const useLoginStore = defineStore('login', () => {
  interface IUserInfo {
    name: string;
    Avatar: string;
    sex: string;
  }
  const token = ref<string>('');
  const userInfo = ref<IUserInfo>({
    name: '',
    Avatar: '',
    sex: ''
  });
  const login = async (LoginParams: ILoginParams): Promise<AxiosResponse<any, any>> => {
    try {
      const res: any = await loginServe(LoginParams);
      if (res.code === '200') {
        token.value = res.data.token;
        window.localStorage.setItem('token', res.data.token);
        return Promise.resolve(res);
      }
      return Promise.reject(res);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  const getUserInfo = async (token: string): Promise<AxiosResponse<any, any>> => {
    try {
      const res: any = await getUserInfoServe(token);
      if (res.code === '200') {
        userInfo.value = res.data;
        window.localStorage.setItem('userInfo', JSON.stringify(res.data));
        return Promise.resolve(res);
      }
      return Promise.reject(res);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  const clearLoginInfo = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    token.value = '';
    userInfo.value = {
      name: '',
      Avatar: '',
      sex: ''
    };
  };
  return { token, login, getUserInfo, userInfo, clearLoginInfo };
});
