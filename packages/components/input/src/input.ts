import { definePropType, isString } from '@shuo-ui/utils'
import { BLUR_EVENT, CHANGE_EVENT, FOCUS_EVENT, INPUT_EVENT, UPDATE_MODEL_EVENT } from '@shuo-ui/constants'

export const InputSize = ['small', 'default', 'large'] as const

export const inputProps = {
  type: {
    type: String,
    default: 'text'
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  size: {
    type: definePropType<typeof InputSize[number]>(String),
    validator: value => InputSize.includes(value)
  },
  clearable: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
}

export const inputEmits = {
  [UPDATE_MODEL_EVENT]: (value: string) => isString(value),
  [INPUT_EVENT]: (value: string) => isString(value),
  [CHANGE_EVENT]: (value: string) => isString(value),
  [FOCUS_EVENT]: (e: Event) => e instanceof Event,
  [BLUR_EVENT]: (e: Event) => e instanceof Event
}
