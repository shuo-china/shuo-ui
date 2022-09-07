import { definePropType } from '@shuo-ui/utils'

export type ColSizeObject = {
  span?: number
  offset?: number
  pull?: number
  push?: number
}
export type ColSize = number | ColSizeObject

export const colProps = {
  tag: {
    type: String,
    default: 'div'
  },
  span: {
    type: Number,
    default: 24
  },
  offset: {
    type: Number,
    default: 0
  },
  pull: {
    type: Number,
    default: 0
  },
  xs: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => ({})
  },
  sm: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => ({})
  },
  md: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => ({})
  },
  lg: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => ({})
  },
  xl: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => ({})
  }
}
