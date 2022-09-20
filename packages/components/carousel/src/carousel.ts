import { definePropType, isNumber } from '@shuo-ui/utils'
import { CHANGE_EVENT } from '@shuo-ui/constants'

export const CarouselTrigger = ['hover', 'click'] as const

export const CarouselDirection = ['top', 'left', 'right', 'bottom'] as const

export const CarouselArrow = ['always', 'hover', 'never'] as const

export const carouselProps = {
  initialIndex: {
    type: Number,
    default: 0
  },
  height: {
    type: [String, Number],
    default: 300
  },
  trigger: {
    type: String,
    values: ['hover', 'click'],
    default: 'click'
  },
  indicator: {
    type: Boolean,
    default: true
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 3000
  },
  loop: {
    type: Boolean,
    default: true
  },
  pauseOnHover: {
    type: Boolean,
    default: true
  },
  direction: {
    type: definePropType<typeof CarouselDirection[number]>(String),
    default: 'bottom',
    validator: value => CarouselDirection.includes(value)
  },
  arrow: {
    type: definePropType<typeof CarouselArrow[number]>(String),
    default: 'hover',
    validator: value => CarouselArrow.includes(value)
  }
}

export const carouselEmits = {
  [CHANGE_EVENT]: (currentIndex: number, prevIndex: number) => isNumber(currentIndex) && isNumber(prevIndex)
}
