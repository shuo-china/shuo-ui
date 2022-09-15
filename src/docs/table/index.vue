<template>
  <div>
    <div class="doc__title">Table 表格</div>
    <div class="doc__desc">表格功能繁杂，还在开发中...</div>
    <s-table :columns="columns" :data="data"></s-table>
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

const data = [
  {
    name: '李逍遥',
    age: 19,
    address: '小渔村'
  },
  {
    name: '赵灵儿',
    age: 16,
    address: '仙灵岛'
  },
  {
    name: '林月如',
    age: 18,
    address: '林家堡'
  }
]
</script>
