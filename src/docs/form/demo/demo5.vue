<template>
  <div>
    <prop-option v-model="size" />
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
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const size = ref('default')

const form = reactive({
  name: '',
  gender: ''
})

</script>
