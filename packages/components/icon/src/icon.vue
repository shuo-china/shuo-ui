<template>
  <i :class="classNames" :style="styles"></i>
</template>

<script setup lang="ts" name="SIcon">
import { computed } from 'vue'
import { addUnit, isUndefined } from '@shuo-ui/utils'
import { getPrefixCls } from '@shuo-ui/utils'
import customStyles from '@shuo-ui/styles/custom.module.scss'
import type { CSSProperties } from 'vue'

const prefixCls = getPrefixCls('icon')

const props = defineProps<{
  name: string
  size?: number | string
  color?: string
  spin?: boolean
}>()

const classNames = computed(() => [
  prefixCls,
  `${customStyles.cssPrefixIconfont}${props.name}`,
  {
    [`${prefixCls}--spin`]: !!props.spin
  }
])

const styles = computed<CSSProperties>(() => ({
  fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
  color: props.color
}))
</script>
