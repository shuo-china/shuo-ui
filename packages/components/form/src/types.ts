import type { ToRefs } from 'vue'
import type { ValidateFieldsError, RuleItem } from 'async-validator'
import type { Arrayable } from '@shuo-ui/utils/typescript'
import type { FormProps } from './form'
import type { FormItemProps } from './form-item'

export type FormRules = Record<string, Arrayable<FormItemRule>>

export type FormValidateCallback = (isValid: boolean, invalidFields?: ValidateFieldsError) => void
export type FormValidationResult = Promise<void>

export interface FormContext extends ToRefs<FormProps> {
  addField: (field: FormItemContext) => void
  removeField: (field: FormItemContext) => void
}

export type FormItemProp = Arrayable<string>
export interface FormItemRule extends RuleItem {
  trigger?: string
}
export type FormItemValidateCallback = FormValidateCallback

export interface FormItemContext extends ToRefs<FormItemProps> {
  validate: (trigger: string, callback?: FormItemValidateCallback) => void
  resetField(): void
}
