import type { ConfigEnv } from 'vite'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import packageConfig from './vite.package'
import dovConfig from './vite.doc'

export default defineConfig(({ mode }: ConfigEnv) => {
  if (mode === 'package') {
    return packageConfig
  } else if (mode === 'doc') {
    return dovConfig
  } else {
    return {
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src'),
          '@shuo-ui': resolve(__dirname, 'packages')
        }
      },
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@import "@shuo-ui/styles/variables.scss";@import "@/assets/styles/variables.scss";'
          }
        }
      },
      plugins: [vue() vueSetupExtend()],
      server: {
        port: 8888
      }
    }
  }
})
