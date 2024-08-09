import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import postcssPxToRem from 'postcss-pxtorem';
import * as dotenv from 'dotenv';

export default defineConfig(({ mode }) => {
  //获取当前环境的Env
  const env = dotenv.config({ path: `./env/.env.${mode}` });
  if (!env.parsed) {
    throw new Error('Failed to parse .env file');
  }
  return {
    base: './',
    envDir: './env',
    plugins: [vue()],
    server: {
      proxy: {
        '^/api/.*': {
          target: env.parsed.VITE_APP_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ''
        }
      },
      postcss: {
        plugins: [
          // px自动转成rem
          postcssPxToRem({
            rootValue: 37.5, // UI设计稿的宽度/10
            unitPrecision: 3, // 转rem精确到小数点多少位
            propList: ['*', '!border*', '!border-radius'], // 需要转换的属性 *表示所有
            selectorBlackList: ['ignore'], // 不进行px转换的选择器
            replace: true, // 是否直接更换属性值，而不添加备用属性
            mediaQuery: false, // 是否在媒体查询的css代码中也进行转换
            minPixelValue: 0, // 设置要替换的最小像素值x
            exclude: /node_modules/i // 排除node_modules文件夹下的文件
          })
        ]
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]'
        }
      },
      chunkSizeWarningLimit: 500
    }
  };
});
