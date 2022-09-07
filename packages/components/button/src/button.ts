import { definePropType } from '@shuo-ui/utils'

export const ButtonType = ['default', 'primary', 'success', 'warning', 'error'] as const

export const ButtonSize = ['small', 'medium', 'large'] as const

export const ButtonNativeType = ['button', 'submit', 'reset'] as const

export const buttonProps = {
  type: {
    type: definePropType<typeof ButtonType[number]>(String),
    default: 'default',
    validator: value => ButtonType.includes(value)
  },
  size: {
    type: definePropType<typeof ButtonSize[number]>(String),
    default: 'medium',
    validator: value => ButtonSize.includes(value)
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
