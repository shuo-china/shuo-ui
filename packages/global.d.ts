declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SButton: typeof import('shuo-ui')['SButton']
  }

  interface ComponentCustomProperties {
    $message: typeof import('shuo-ui')['SMessage']
  }
}

export {}
