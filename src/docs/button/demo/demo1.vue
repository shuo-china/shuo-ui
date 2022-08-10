<template>
  <div class="container">
    <div style="display: flex; gap: 12px">
      <s-button>default</s-button>
      <s-button type="primary">primary</s-button>
      <s-button type="success">success</s-button>
      <s-button type="warning">warning</s-button>
      <s-button type="error">error</s-button>
    </div>
    <div style="display: flex; gap: 12px">
      <s-button round>default</s-button>
      <s-button type="primary" round>primary</s-button>
      <s-button type="success" round>success</s-button>
      <s-button type="warning" round>warning</s-button>
      <s-button type="error" round>error</s-button>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
