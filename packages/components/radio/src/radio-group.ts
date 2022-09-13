import { definePropType } from '@shuo-ui/utils'
import { componentSizes } from '@shuo-ui/constants'
import type { ComponentSize } from '@shuo-ui/constants'
import type { ExtractPropTypes } from 'vue'

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

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>
