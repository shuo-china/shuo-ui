import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import defineOptions from 'unplugin-vue-define-options/vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'shuo-ui': resolve(__dirname, 'packages')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "shuo-ui/styles/var.scss";'
      }
    }
  },
  plugins: [vue(), defineOptions(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'shuo-ui',
      fileName: format => `shuo.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  server: {
    port: 8888
  }
})
