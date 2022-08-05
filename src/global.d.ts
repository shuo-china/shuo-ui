import Preview from '@/components/preview.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Preview: typeof Preview
  }
}
