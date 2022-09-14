import { definePropType } from '@shuo-ui/utils'
import { componentSizes } from '@shuo-ui/constants'
import { radioEmits } from './radio'
import type { ComponentSize } from '@shuo-ui/constants'

export const radioGroupProps = {
  modelValue: {
    type: [String, Number, Boolean],
    default: false
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

export const radioGroupEmits = radioEmits
