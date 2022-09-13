<template>
  <div style="margin-bottom: 30px">
    <s-space>
      <s-button @click="size='small'">Small</s-button>
      <s-button @click="size='default'">Default</s-button>
      <s-button @click="size='large'">Large</s-button>
    </s-space>
  </div>
  <s-form :model="form" :label-width="80" :size="size">
    <s-form-item label="姓名">
      <s-input v-model="form.name" />
    </s-form-item>
  </s-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const size = ref('default')

const form = reactive({
  name: ''
})

</script>
