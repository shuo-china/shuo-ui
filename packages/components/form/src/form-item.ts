import { Arrayable, definePropType } from '@shuo-ui/utils'
import { componentSizes } from '@shuo-ui/constants'
import type { ComponentSize } from '@shuo-ui/constants'
import type { FormItemProp, FormItemRule } from './types'

export const formItemProps = {
  label: String,
  labelWidth: {
    type: [String, Number],
    default: ''
  },
  prop: {
    type: definePropType<FormItemProp>([String, Array])
  },
  rules: {
    type: definePropType<Arrayable<FormItemRule>>([Object, Array])
  },
  required: {
    type: Boolean,
    default: undefined
  },
  size: {
    type: definePropType<ComponentSize>(String),
    validator: value => componentSizes.includes(value)
  }
}
