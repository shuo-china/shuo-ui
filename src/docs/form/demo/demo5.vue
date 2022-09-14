<template>
  <s-space direction="vertical" size="large">
    <s-space>
      <s-button @click="size='small'">Small</s-button>
      <s-button @click="size='default'">Default</s-button>
      <s-button @click="size='large'">Large</s-button>
    </s-space>
    <s-form :model="form" :label-width="80" :size="size">
      <s-form-item label="姓名">
        <s-input v-model="form.name" />
      </s-form-item>
      <s-form-item label="性别">
        <s-radio-group v-model="form.gender">
          <s-radio :label="1">男</s-radio>
          <s-radio :label="2">女</s-radio>
        </s-radio-group>
      </s-form-item>
    </s-form>
  </s-space>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const size = ref('default')

const form = reactive({
  name: '',
  gender: ''
})

</script>
