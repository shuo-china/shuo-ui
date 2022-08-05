import Demo from '@/components/demo.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Demo: typeof Demo
  }
}
