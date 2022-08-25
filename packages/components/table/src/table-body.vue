<template>
  <table cellspacing="0" cellpadding="0" border="0">
    <colgroup>
      <col v-for="(column, index) in columns" :key="index" :width="column._width" />
    </colgroup>
    <tbody>
      <template v-for="(row, index) in data" :key="index">
        <tr>
          <td v-for="(column, colIndex) in columns" :key="colIndex">
            <div :class="cellClassNames">
              <span>{{ row[column.key] }}</span>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  prefixCls: string
  columns: Record<string, any>[]
  data: Record<string, any>[]
}>()

const cellClassNames = computed(() => [`${props.prefixCls}-cell`])
</script>
