import { definePropType, isString } from '@shuo-ui/utils'

export const InputSize = ['small', 'medium', 'large'] as const

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
    default: 'medium',
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
  'update:modelValue': (value: string) => isString(value),
  input: (value: string) => isString(value),
  change: (value: string) => isString(value),
  focus: (e: Event) => e instanceof Event,
  blur: (e: Event) => e instanceof Event
}
