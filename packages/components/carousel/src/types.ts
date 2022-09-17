import type { Ref } from 'vue'

export interface CarouselContext {
  root: Ref<HTMLDivElement>
  items: Ref<CarouselItemContext[]>
  addItem: (item: CarouselItemContext) => void
  removeItem: (item: CarouselItemContext) => void
}

export interface CarouselItemContext {
  translateItem: (index: number, activeIndex: number) => void
}
