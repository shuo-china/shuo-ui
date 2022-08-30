<template>
  <s-form :model="form" :label-width="80">
    <s-form-item label="姓名">
      <s-input v-model="form.name" />
    </s-form-item>
    <s-form-item>
      <s-button type="primary" @click="onSubmit">Submit</s-button>
    </s-form-item>
  </s-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const form = reactive({
  name: ''
})

const onSubmit = () => {
  console.log('submit', form)
}
</script>
