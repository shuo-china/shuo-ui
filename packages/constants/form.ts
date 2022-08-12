import type { Ref, InjectionKey } from 'vue'
import type { ValidateFieldsError, RuleItem } from 'async-validator'
import type { Arrayable } from '@shuo-ui/utils/typescript'

export interface FormItemRule extends RuleItem {
  trigger?: string
}

export type FormRules = Record<string, FormItemRule | FormItemRule[]>

export type FormValidateCallback = (isValid: boolean, invalidFields?: ValidateFieldsError) => void
export type FormValidationResult = Promise<true>
export type FormItemValidationResult = Promise<{
  valid: boolean
  fields?: ValidateFieldsError
}>

export interface FormContext {
  model: Ref<Record<string, any> | undefined>
  rules: Ref<FormRules | undefined>
  addField: (field: FormItemContext) => void
  removeField: (field: FormItemContext) => void
}

export type FormItemProp = Arrayable<string>

export interface FormItemContext {
  prop: Ref<FormItemProp | undefined>
  validate: (trigger: string, callback?: FormValidateCallback) => FormItemValidationResult
}

export const formContextKey: InjectionKey<FormContext> = Symbol('formContextKey')
export const formItemContextKey: InjectionKey<FormItemContext> = Symbol('formItemContextKey')
