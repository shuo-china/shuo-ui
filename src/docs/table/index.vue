<template>
  <div>
    <s-table :columns="columns" :data="data"></s-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { STable } from '@shuo-ui'

const columns = ref([
  {
    title: 'Name',
    key: 'name',
    width: 200
  },
  {
    title: 'Age',
    key: 'age'
  },
  {
    title: 'Address',
    key: 'address'
  }
])

const data = [
  {
    id: '12987122',
    name: '王小虎',
    age: 12,
    address: '江苏省徐州xxx'
  },
  {
    id: '12987122',
    name: '王小虎',
    age: 12,
    address: '江苏省徐州xxx'
  },
  {
    id: '12987122',
    name: '王小虎',
    age: 12,
    address: '江苏省徐州xxx'
  },
  {
    id: '12987122',
    name: '王小虎',
    age: 12,
    address: '江苏省徐州xxx'
  },
  {
    id: '12987122',
    name: '王小虎',
    age: 12,
    address: '江苏省徐州xxx'
  }
]
</script>
