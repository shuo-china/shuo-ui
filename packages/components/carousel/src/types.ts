import { carouselProps } from './carousel'
import type { ComputedRef, ExtractPropTypes, Ref, ToRefs } from 'vue'

export interface CarouselContext extends ToRefs<CarouselProps> {
  root: Ref<HTMLDivElement>
  isVertical: ComputedRef<boolean>
  items: Ref<CarouselItemContext[]>
  addItem: (item: CarouselItemContext) => void
  removeItem: (item: CarouselItemContext) => void
}

export interface CarouselItemContext {
  translateItem: (index: number, activeIndex: number, oldActiveIndex: number) => void
}

export type CarouselProps = ExtractPropTypes<typeof carouselProps>
