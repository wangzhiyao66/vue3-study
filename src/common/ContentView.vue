<template>
  <div class="content-box">
    <p>ContentView 组件</p>
    <router-view />
  </div>
</template>
<style lang="less" scoped>
.content-box {
  float: left;
  width: 100%;
  height: 100%;
  background: #f5f7f7;
}
</style>
<script lang="ts">
export default {
  name: 'ContentView',
}
</script>
