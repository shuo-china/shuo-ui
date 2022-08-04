<template>
  <i :class="classNames" :style="styles"></i>
</template>

<script setup lang="ts" name="SIcon">
import type { CSSProperties } from 'vue'
import { addUnit, isUndefined } from '@shuo-ui/utils'
import { computed } from 'vue'

const props = defineProps<{
  name: string
  size?: number | string
  color?: string
}>()

const classNames = computed(() => [`s-icon-${props.name}`])

const styles = computed<CSSProperties>(() => ({
  fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
  color: props.color
}))
</script>
