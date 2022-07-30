import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
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
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, './packages/index.ts'),
      name: 'shuo-ui',
      fileName: format => `shuo.${format}.ts`
    }
  }
})
