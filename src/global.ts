import SButton from 'shuo-ui/components/button/src/button.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SButton: typeof SButton
  }
}
