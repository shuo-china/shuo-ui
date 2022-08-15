<template>
  <button :class="classNames" :type="nativeType">
    <span v-if="loading" class="s-button-icon">
      <s-icon name="loading" :spin="true"></s-icon>
    </span>
    <span><slot></slot></span>
  </button>
</template>

<script setup lang="ts" name="SButton">
import { computed } from 'vue'
import { SIcon } from '@shuo-ui/components'
import { getPrefixCls } from '@shuo-ui/utils'

const prefixCls = getPrefixCls('button')

const props = withDefaults(
  defineProps<{
    type?: 'default' | 'primary' | 'success' | 'error' | 'warning'
    size?: 'small' | 'medium' | 'large'
    loading?: boolean
    round?: boolean
    nativeType?: 'button' | 'submit' | 'reset'
  }>(),
  {
    type: 'default',
    size: 'medium',
    loading: false,
    round: false,
    nativeType: 'button'
  }
)

const classNames = computed(() => [
  prefixCls,
  `${prefixCls}-${props.type}`,
  `${prefixCls}-${props.size}`,
  {
    [`${prefixCls}-loading`]: !!props.loading,
    [`${prefixCls}-round`]: !!props.round
  }
])
</script>
