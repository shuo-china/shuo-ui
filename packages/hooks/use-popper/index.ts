import { createPopper, placements } from '@popperjs/core'
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { definePropType } from '@shuo-ui/utils'
import type { ExtractPropTypes, Ref, SetupContext } from 'vue'
import type { Placement } from '@popperjs/core'

export const popperProps = {
  placement: {
    type: definePropType<Placement>(String),
    validator: value => placements.includes(value),
    default: 'bottom'
  },
  offset: {
    type: Number,
    default: 12
  }
}

export const popperEmits = {
  'on-popper-show': null,
  'on-popper-hide': null
}

export const usePopper = (
  reference: Ref<HTMLElement | null>,
  popper: Ref<HTMLElement | null>,
  props: ExtractPropTypes<typeof popperProps>,
  emit: SetupContext<typeof popperEmits>['emit']
) => {
  // popper instance
  let popperInstance: ReturnType<typeof createPopper> | undefined

  // visible
  const visible = ref(false)

  // popper options
  const enabledPopperEventListeners = ref(false)
  const popperOptions = computed(() => ({
    placement: props.placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, props.offset]
        }
      },
      {
        name: 'arrow',
        options: {
          padding: 8
        }
      },
      {
        name: 'eventListeners',
        enabled: enabledPopperEventListeners.value
      }
    ]
  }))

  watch(popperOptions, current => {
    popperInstance?.setOptions(current)
  })

  watch(visible, async current => {
    if (current) {
      await nextTick()
      enabledPopperEventListeners.value = true
      if (popperInstance) {
        popperInstance.update()
      } else if (reference?.value && popper?.value) {
        popperInstance = createPopper(reference.value, popper.value!, popperOptions.value)
      }
      emit('on-popper-show')
    } else {
      enabledPopperEventListeners.value = false
      emit('on-popper-hide')
    }
  })

  onBeforeUnmount(() => {
    popperInstance?.destroy()
  })

  return {
    visible
  }
}
