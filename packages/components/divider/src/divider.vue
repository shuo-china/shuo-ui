<template>
  <div :class="classNames">
    <span v-if="slots.default && direction !== 'vertical'" :class="slotClassNames">
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts" name="SDivider">
import { computed, useSlots } from 'vue'
import { getPrefixCls } from '@shuo-ui/utils'

const prefixCls = getPrefixCls('divider')

const slots = useSlots()

const props = withDefaults(
  defineProps<{
    direction?: 'horizontal' | 'vertical'
    contentPosition?: 'left' | 'right' | 'center'
    dashed?: boolean
  }>(),
  {
    direction: 'horizontal',
    contentPosition: 'center',
    dashed: false
  }
)

const classNames = computed(() => [
  prefixCls,
  `${prefixCls}-${props.direction}`,
  {
    [`${prefixCls}-dashed`]: !!props.dashed
  }
])

const slotClassNames = computed(() => [`${prefixCls}-text`, `${prefixCls}-text-${props.contentPosition}`])
</script>
