import { definePropType } from '@shuo-ui/utils'

export const DividerDirection = ['horizontal', 'vertical'] as const

export const DividerContentPosition = ['left', 'right', 'center'] as const

export const dividerProps = {
  direction: {
    type: definePropType<typeof DividerDirection[number]>(String),
    default: 'horizontal',
    validator: value => DividerDirection.includes(value)
  },
  contentPosition: {
    type: definePropType<typeof DividerContentPosition[number]>(String),
    default: 'center',
    validator: value => DividerContentPosition.includes(value)
  },
  dashed: {
    type: Boolean,
    default: false
  }
}
