<template>
  <table cellspacing="0" cellpadding="0" border="0">
    <colgroup>
      <col v-for="(column, index) in columns" :key="index" :width="column._width" />
    </colgroup>
    <thead>
      <tr>
        <th v-for="(column, index) in columns" :key="index">
          <div :class="cellClassNames">
            <span>{{ column.title }}</span>
          </div>
        </th>
      </tr>
    </thead>
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  prefixCls: string
  columns: Record<string, any>[]
}>()

const cellClassNames = computed(() => [`${props.prefixCls}-cell`])
</script>
