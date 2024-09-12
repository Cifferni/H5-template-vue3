import { MockMethod } from 'vite-plugin-mock';

function printInfo(title: string, request: any): void {
  console.log('\x1B[31m%s\x1B[0m', '=======================MockStart=======================');
  console.log(`\x1B[36mtitle:${title}\x1B[0m`);
  console.log(`\x1B[36m请求地址:${request.url}\x1B[0m`);
  console.log(`\x1B[36mquery参数:${JSON.stringify(request.query)}\x1B[0m`);
  console.log(`\x1B[36mbody 参数:${JSON.stringify(request.body)}\x1B[0m`);
  console.log('\x1B[31m%s\x1B[0m', '=======================MockEnd=======================');
}
export default [
  {
    url: '/mock/login',
    method: 'post',
    response: (request: any) => {
      printInfo('登录接口', request);
      return {
        code: '200',
        message: 'success',
        data: {
          token: 'mSLi8xtJgmh3xrIW938Rwg7GHqCW6qTfBrexBMUDJwrd7W5yZgiLLP47JH3l6L9'
        }
      };
    }
  },
  {
    url: '/mock/getUserInfo',
    method: 'get',
    response: (request: any) => {
      printInfo('获取用户信息', request);
      return {
        code: '200',
        message: 'success',
        data: {
          useName: '张三',
          age: 18,
          sex: '1',
          Avatar: 'https://avatars.githubusercontent.com/u/101169944?v=4'
        }
      };
    }
  }
] as MockMethod[];
