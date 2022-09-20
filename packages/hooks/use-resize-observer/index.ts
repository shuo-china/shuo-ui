import { onBeforeUnmount, onMounted } from 'vue'
import type { Ref } from 'vue'

export const useResizeObserver = (el: Ref<HTMLElement | undefined>, onResize: () => void) => {
  const resizeObserver = new ResizeObserver(onResize)

  onMounted(() => {
    if (el.value) {
      resizeObserver.observe(el.value)
    }
  })

  onBeforeUnmount(() => {
    if (el.value) {
      resizeObserver.unobserve(el.value)
    }
  })
}
