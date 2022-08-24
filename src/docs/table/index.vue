<template>
  <div>
    <s-table :columns="columns"></s-table>
  </div>
</template>

<script setup lang="ts">
import { STable } from '@shuo-ui'

const columns = [
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age'
  },
  {
    title: 'Address',
    key: 'address'
  }
]
</script>
