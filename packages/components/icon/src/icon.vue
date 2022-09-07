<template>
  <i :class="classNames" :style="styles"></i>
</template>

<script setup lang="ts" name="SIcon">
import { computed } from 'vue'
import { iconProps } from './icon'
import { addUnit, isUndefined } from '@shuo-ui/utils'
import { getPrefixCls } from '@shuo-ui/utils'
import customStyles from '@shuo-ui/styles/custom.module.scss'
import type { CSSProperties } from 'vue'

const prefixCls = getPrefixCls('icons')

const props = defineProps(iconProps)

const classNames = computed(() => [
  prefixCls,
  `${customStyles.cssPrefixIconfont}${props.name}`,
  {
    [`${prefixCls}-spin`]: !!props.spin
  }
])

const styles = computed<CSSProperties>(() => ({
  fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
  color: props.color
}))
</script>
