import { fileURLToPath, URL } from 'node:url';
import { BuildOptions, defineConfig, type ESBuildOptions, type PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import postcssPxToRem from 'postcss-pxtorem';
import * as dotenv from 'dotenv';
import { visualizer } from 'rollup-plugin-visualizer';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

interface defaultConfigType {
  plugins: PluginOption[] ;
  esbuild: false | ESBuildOptions | undefined;
  build: BuildOptions | undefined;
}

export default defineConfig(({ mode }) => {
  //获取当前环境的Env
  const env = dotenv.config({ path: `./env/.env.${mode}` });
  const defaultConfig: defaultConfigType = {
    plugins: [vue(), visualizer({
      open: true,
      filename: 'stats.html',
      emitFile: false
    })],
    esbuild: {
      pure: [],
      drop: []
    },
    build: {
      chunkSizeWarningLimit: 500,
      sourcemap: true,
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]'
        }
      }
    }
  };
  if (mode === 'production') {
    defaultConfig.plugins = [vue()];
    defaultConfig.esbuild = {
      pure: ['console.log'], // 删除 console.log
      drop: ['debugger'] // 删除 debugger
    };
    if (defaultConfig.build) defaultConfig.build.sourcemap = false;
  }
  if (!env.parsed) {
    throw new Error('Failed to parse .env file');
  }
  return {
    base: './',
    envDir: './env',
    plugins: [...defaultConfig.plugins, ViteImageOptimizer({
      jpg: {
        quality: 50
      },
      png: {
        quality: 50
      },
    })],
    esbuild: defaultConfig.esbuild,
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
    build: defaultConfig.build
  };
});
