<template>
  <div>
    <div class="doc__title">Table 表格</div>
    <div class="doc__desc">这个组件太难写了，容我再想想</div>
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
    name: 'John Brown',
    age: 18,
    address: 'New York No. 1 Lake Park',
    date: '2016-10-03'
  },
  {
    name: 'Jim Green',
    age: 24,
    address: 'London No. 1 Lake Park',
    date: '2016-10-01'
  },
  {
    name: 'Joe Black',
    age: 30,
    address: 'Sydney No. 1 Lake Park',
    date: '2016-10-02'
  },
  {
    name: 'Jon Snow',
    age: 26,
    address: 'Ottawa No. 2 Lake Park',
    date: '2016-10-04'
  }
]
</script>
