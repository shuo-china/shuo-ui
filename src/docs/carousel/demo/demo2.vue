<template>
  <div>
    <s-carousel :height="200" direction="right">
      <s-carousel-item>
        <h3 class="item">1</h3>
      </s-carousel-item>
      <s-carousel-item>
        <h3 class="item">2</h3>
      </s-carousel-item>
      <s-carousel-item>
        <h3 class="item">3</h3>
      </s-carousel-item>
    </s-carousel>
  </div>
</template>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  margin: 0;
  color: #6a7789;
  font-size: 24px;
}

.s-carousel-item:nth-child(2n) {
  background-color: #99a9bf;
}

.s-carousel-item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
