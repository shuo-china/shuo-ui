import { definePropType } from '@shuo-ui/utils'

export const CarouselDirection = ['horizontal', 'vertical'] as const

export const carouselProps = {
  initialIndex: {
    type: Number,
    default: 0
  },
  height: {
    type: String,
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
  direction: {
    type: definePropType<typeof CarouselDirection[number]>(String),
    default: 'horizontal',
    validator: value => CarouselDirection.includes(value)
  }
}
