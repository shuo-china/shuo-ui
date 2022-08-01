import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'shuo-ui': resolve(__dirname, 'packages')
    }
  },
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, './packages/index.ts'),
      name: 'shuo-ui',
      fileName: format => `shuo.${format}.ts`
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
