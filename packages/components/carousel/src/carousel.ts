import { definePropType } from '@shuo-ui/utils'

export const CarouselDirection = ['top', 'left', 'right', 'bottom'] as const

export const CarouselArrow = ['always', 'hover', 'never'] as const

export const carouselProps = {
  initialIndex: {
    type: Number,
    default: 0
  },
  height: {
    type: [String, Number],
    default: ''
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
