import { definePropType } from '@shuo-ui/utils'
import { componentSizes } from '@shuo-ui/constants'
import type { ComponentSize } from '@shuo-ui/constants'

export const ButtonType = ['default', 'primary', 'success', 'warning', 'error'] as const

export const ButtonNativeType = ['button', 'submit', 'reset'] as const

export const buttonProps = {
  type: {
    type: definePropType<typeof ButtonType[number]>(String),
    default: 'default',
    validator: value => ButtonType.includes(value)
  },
  size: {
    type: definePropType<ComponentSize>(String),
    default: 'default',
    validator: value => componentSizes.includes(value)
  },
  nativeType: {
    type: definePropType<typeof ButtonNativeType[number]>(String),
    default: 'button',
    validator: value => ButtonNativeType.includes(value)
  },
  loading: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  }
}
