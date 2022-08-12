declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SButton: typeof import('shuo-ui')['SButton']
    SIcon: typeof import('shuo-ui')['SIcon']
    SForm: typeof import('shuo-ui')['SForm']
    SFormItem: typeof import('shuo-ui')['SFormItem']
    SInput: typeof import('shuo-ui')['SInput']
  }

  interface ComponentCustomProperties {
    $sMessage: typeof import('shuo-ui')['SMessage']
  }
}

export {}
