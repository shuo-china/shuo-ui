<template>
  <div ref="tableWrap" :class="wrapClassNames">
    <div :class="classNames">
      <div :class="[prefixCls + '-header']">
        <table-head :columns="cloneColumns" :prefix-cls="prefixCls" />
      </div>
      <div :class="[prefixCls + '-body']">
        <table-body :columns="cloneColumns" :data="data" :prefix-cls="prefixCls" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { cloneDeep, uniqueId } from 'lodash'
import { ref, computed, onMounted, watch, onBeforeUnmount } from 'vue'
import TableHead from './table-head.vue'
import TableBody from './table-body.vue'
import { getPrefixCls } from '@shuo-ui/utils'

const props = withDefaults(
  defineProps<{
    columns?: Record<string, any>[]
    data?: Record<string, any>[]
  }>(),
  {
    columns: () => [],
    data: () => []
  }
)

const prefixCls = getPrefixCls('table')

const wrapClassNames = computed(() => [`${prefixCls}-wrapper`])

const classNames = computed(() => [prefixCls])

const tableWrap = ref<HTMLDivElement | null>(null)

const makeColumns = cols => {
  const columns = cloneDeep(cols)
  columns.forEach((column, index) => {
    column.id = uniqueId('table_column_')
    column._index = index
    column.width = parseInt(column.width)
  })

  return columns
}

const cloneColumns = ref(makeColumns(props.columns))

const handleResize = () => {
  const tableWidth = tableWrap.value?.offsetWidth
  if (!tableWidth) return

  // 包含width属性的column
  const hasWidthColumns = []
  // 不包含width属性的column
  const noWidthColumns = []

  cloneColumns.value.forEach(col => {
    if (col.width) {
      hasWidthColumns.push(col)
    } else {
      noWidthColumns.push(col)
    }
  })

  // 不可用的宽度
  let unUsableWidth = hasWidthColumns.map(col => col.width).reduce((p, n) => p + n, 0)
  // 可用的宽度
  let usableWidth = tableWidth - unUsableWidth
  // 可用的份数
  let usableLength = noWidthColumns.length

  cloneColumns.value.forEach(column => {
    if (column.width) {
      column._width = column.width
    } else {
      const columnWidth = parseInt(usableWidth / usableLength)
      column._width = columnWidth
      usableWidth -= columnWidth
      usableLength--
    }
  })
}

watch(
  () => props.columns,
  () => {
    cloneColumns.value = makeColumns(props.columns)
    handleResize()
  },
  {
    deep: true
  }
)

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
