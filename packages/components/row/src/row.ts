import { definePropType } from '@shuo-ui/utils'

export const RowJustify = ['start', 'center', 'end', 'space-around', 'space-between', 'space-evenly'] as const

export const RowAlign = ['top', 'middle', 'bottom'] as const

export const rowProps = {
  tag: {
    type: String,
    default: 'div'
  },
  gutter: {
    type: Number,
    default: 0
  },
  align: {
    type: definePropType<typeof RowAlign[number]>(String),
    default: 'top',
    validator: value => RowAlign.includes(value)
  },
  justify: {
    type: definePropType<typeof RowJustify[number]>(String),
    default: 'start',
    validator: value => RowJustify.includes(value)
  }
}
