import axios from 'axios';

const baseURl = import.meta.env.VITE_BASE_API;
const request = axios.create({
  baseURL: '/api',
  timeout: 5000
});
request.interceptors.request.use(
  (config: any) => {
    // 在这里坐登录。给请求头携带Token
    return config;
  },
  (error) => Promise.reject(error)
);
request.interceptors.response.use(
  function (response) {
    return Promise.reject(response.data);
  },
  function (error) {
    return Promise.reject({
      url: baseURl + error.config.url,
      code: error.code,
      message: error.message
    });
  }
);
export default request;
