import { Arrayable, definePropType } from '@shuo-ui/utils'
import { FormItemProp, FormItemRule } from './types'

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
  }
}
