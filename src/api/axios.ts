import axios, { type AxiosError, type InternalAxiosRequestConfig, type AxiosInstance, type AxiosResponse } from 'axios';
const baseURl = import.meta.env.VITE_APP_URL;
// console.log(baseURl);
const service: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 5000
});
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    //登录成功后,需要把token添加到请求头当中,从今往后所有的请求当中都要带上这个token
    const token = window.localStorage.getItem('token');
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);
service.interceptors.response.use(
  function (response: AxiosResponse) {
    return Promise.resolve(response.data);
  },
  function (error: any) {
    console.log('requestError', error);
    return Promise.reject({
      url: baseURl + error.config.url,
      code: error.code,
      message: error.message
    });
  }
);
export default service;
