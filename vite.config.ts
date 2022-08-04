import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@shuo-ui': resolve(__dirname, 'packages')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@shuo-ui/styles/variables.scss";'
      }
    }
  },
  plugins: [
    vue(),
    dts({
      outputDir: './dist/types',
      include: './packages'
    }),
    vueSetupExtend()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'shuo-ui',
      fileName: format => `shuo-ui.${format}.js`,
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
