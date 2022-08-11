import type { InjectionKey } from 'vue'

interface FormItemContext {
  onFieldChange(value: string | number): void
  onFieldBlur(value: string | number): void
}

export const formContextKey: InjectionKey<any> = Symbol('formContextKey')
export const formItemContextKey: InjectionKey<FormItemContext> = Symbol('formItemContextKey')
