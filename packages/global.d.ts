declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SButton: typeof import('shuo-ui')['SButton']
    SIcon: typeof import('shuo-ui')['SIcon']
  }

  interface ComponentCustomProperties {
    $message: typeof import('shuo-ui')['SMessage']
  }
}

export {}
