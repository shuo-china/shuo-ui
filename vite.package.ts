import type { UserConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

const config: UserConfig = {
  resolve: {
    alias: {
      '@shuo-ui': resolve(__dirname, 'packages')
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
      external: ['vue', 'lodash', 'async-validator'],
      output: {
        globals: {
          vue: 'Vue',
          lodash: 'lodash',
          'async-validator': 'async-validator'
        }
      }
    }
  }
}

export default config
