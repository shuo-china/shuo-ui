import { UPDATE_MODEL_EVENT, componentSizes } from '@shuo-ui/constants'
import { definePropType, isBoolean, isNumber, isString } from '@shuo-ui/utils'
import type { ComponentSize } from '@shuo-ui/constants'

export const RadioSize = ['small', 'default', 'large'] as const

export const radioProps = {
  modelValue: {
    type: [String, Number, Boolean],
    default: false
  },
  label: {
    type: [String, Number],
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: definePropType<ComponentSize>(String),
    validator: value => componentSizes.includes(value)
  }
}

export const radioEmits = {
  [UPDATE_MODEL_EVENT]: (value: string | number | boolean) => isString(value) || isNumber(value) || isBoolean(value),
  change: (value: string | number | boolean) => isString(value) || isNumber(value) || isBoolean(value)
}
