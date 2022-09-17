import type { InjectionKey } from 'vue'
import type { CarouselContext } from './types'

export const carouselContextKey: InjectionKey<CarouselContext> = Symbol('carouselContextKey')
