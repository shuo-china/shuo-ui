<template>
  <div class="container">
    <p>类型</p>
    <div class="demo-item">
      <s-button>default</s-button>
      <s-button type="primary">primary</s-button>
      <s-button type="success">success</s-button>
      <s-button type="warning">warning</s-button>
      <s-button type="error">error</s-button>
      <s-button type="info">info</s-button>
    </div>

    <p>尺寸</p>
    <div class="demo-item">
      <s-button size="small">small</s-button>
      <s-button size="medium">medium</s-button>
      <s-button size="large">large</s-button>
    </div>

    <p>圆形</p>
    <div class="demo-item">
      <s-button round>round</s-button>
    </div>

    <p>加载</p>
    <div class="demo-item">
      <s-button loading>round</s-button>
    </div>

    <p>禁用</p>
    <div class="demo-item">
      <s-button disabled>disabled</s-button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container {
  padding: 0 24px;

  .demo-item {
    display: flex;
    gap: 20px;
    align-items: flex-end;
  }
}
</style>
