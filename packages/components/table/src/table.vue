<template>
  <div :class="wrapClassNames">
    <div :class="classNames">
      <div :class="[prefixCls + '-header']">
        <table-head :columns="columns" :prefix-cls="prefixCls" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TableHead from './table-head.vue'
import { getPrefixCls } from '@shuo-ui/utils'

const props = withDefaults(
  defineProps<{
    columns?: Record<string, any>[]
  }>(),
  {
    columns: () => []
  }
)

const prefixCls = getPrefixCls('table')

const wrapClassNames = computed(() => [`${prefixCls}-wrapper`])

const classNames = computed(() => [prefixCls])
</script>
