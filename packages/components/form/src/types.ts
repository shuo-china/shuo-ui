import type { Ref } from 'vue'
import type { ValidateFieldsError, RuleItem } from 'async-validator'
import type { Arrayable } from '@shuo-ui/utils/typescript'
import type { ComponentSize } from '@shuo-ui/constants'

export type FormRules = Record<string, Arrayable<FormItemRule>>

export type FormValidateCallback = (isValid: boolean, invalidFields?: ValidateFieldsError) => void
export type FormValidationResult = Promise<void>

export interface FormContext {
  inline: Ref<boolean>
  disabled: Ref<boolean>
  labelPosition: Ref<string>
  model: Ref<Record<string, any> | undefined>
  rules: Ref<FormRules | undefined>
  labelWidth: Ref<number | string | undefined>
  size: Ref<ComponentSize | undefined>
  addField: (field: FormItemContext) => void
  removeField: (field: FormItemContext) => void
}

export type FormItemProp = Arrayable<string>
export interface FormItemRule extends RuleItem {
  trigger?: string
}
export type FormItemValidateCallback = FormValidateCallback

export interface FormItemContext {
  labelWidth: Ref<string | number | undefined>
  required: Ref<boolean | undefined>
  label: Ref<string | undefined>
  prop: Ref<FormItemProp | undefined>
  rules: Ref<Arrayable<FormItemRule> | undefined>
  size: Ref<ComponentSize | undefined>
  validate: (trigger: string, callback?: FormItemValidateCallback) => void
  resetField(): void
}
