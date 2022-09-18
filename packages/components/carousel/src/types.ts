import { carouselProps } from './carousel'
import type { ExtractPropTypes, Ref } from 'vue'

export interface CarouselContext {
  root: Ref<HTMLDivElement>
  items: Ref<CarouselItemContext[]>
  addItem: (item: CarouselItemContext) => void
  removeItem: (item: CarouselItemContext) => void
}

export interface CarouselItemContext {
  translateItem: (index: number, activeIndex: number, oldActiveIndex: number) => void
}

export type CarouselProps = ExtractPropTypes<typeof carouselProps>
