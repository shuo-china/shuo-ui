<template>
  <table>
    <colgroup>
      <col v-for="(column, index) in columns" :key="index" />
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
