declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SButton: typeof import('shuo-ui')['SButton']
    SIcon: typeof import('shuo-ui')['SIcon']
    SInput: typeof import('shuo-ui')['SInput']
    SForm: typeof import('shuo-ui')['SForm']
    SFormItem: typeof import('shuo-ui')['SFormItem']
    STable: typeof import('shuo-ui')['STable']
    SDivider: typeof import('shuo-ui')['SDivider']
    SSpace: typeof import('shuo-ui')['SSpace']
    SRow: typeof import('shuo-ui')['SRow']
    SCol: typeof import('shuo-ui')['SCol']
    SRadioGroup: typeof import('shuo-ui')['SRadioGroup']
    SRadio: typeof import('shuo-ui')['SRadio']
    SRadioButton: typeof import('shuo-ui')['SRadioButton']
    // SCarousel: typeof import('shuo-ui')['SCarousel']
    // SCarouselItem: typeof import('shuo-ui')['SCarouselItem']
  }

  interface ComponentCustomProperties {
    $sMessage: typeof import('shuo-ui')['SMessage']
  }
}

export {}
