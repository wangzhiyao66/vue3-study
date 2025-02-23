<template>
  <div class="child-box">
    <slot name="header" :color="color"> </slot>
    <p>我是child 组件 {{ colorValue }}</p>
    <slot name="footer" :name1="name1"> </slot>
  </div>
</template>
<style lang="less" scoped>
.child-box {
  width: 100%;
  border: 1px solid red;
}
</style>
<script setup lang="ts">
import { inject, type Ref } from 'vue';

const colorValue = inject<Ref<string>>('color');
let color = 'red', name1 = 'test_name';

</script>
