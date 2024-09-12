import service from '../axios';
import type { AxiosResponse } from 'axios';
export interface ILoginParams {
  username: string;
  password: string;
}
export const loginServe = (LoginParams: ILoginParams): Promise<AxiosResponse<any, any>> => {
  return service({
    method: 'post',
    url: '/mock/login',
    data: LoginParams
  });
};
export const getUserInfoServe = (token: string): Promise<AxiosResponse<any, any>> => {
  return service({
    method: 'get',
    url: '/mock/getUserInfo',
    params: {
      token: token
    }
  });
};
