import type { Ref, InjectionKey } from 'vue'
import type { ValidateFieldsError, RuleItem } from 'async-validator'
import type { Arrayable } from '@shuo-ui/utils/typescript'

export type FormRules = Record<string, Arrayable<FormItemRule>>

export type FormValidateCallback = (isValid: boolean, invalidFields?: ValidateFieldsError) => void
export type FormValidationResult = Promise<void>

export interface FormContext {
  model: Ref<Record<string, any> | undefined>
  rules: Ref<FormRules | undefined>
  labelPosition: Ref<string>
  labelWidth: Ref<number | string | undefined>
  addField: (field: FormItemContext) => void
  removeField: (field: FormItemContext) => void
}

export type FormItemProp = Arrayable<string>
export interface FormItemRule extends RuleItem {
  trigger?: string
}
export type FormItemValidateCallback = FormValidateCallback

export interface FormItemContext {
  prop: Ref<FormItemProp | undefined>
  validate: (trigger: string, callback?: FormItemValidateCallback) => void
  resetField(): void
}

export const formContextKey: InjectionKey<FormContext> = Symbol('formContextKey')
export const formItemContextKey: InjectionKey<FormItemContext> = Symbol('formItemContextKey')
