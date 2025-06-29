<template>
  <div class="preview-container ">
    <div>
      我是预览子组件 {{ value }} {{ count }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { customize } from '@/stores/customize';

// import { ref } from 'vue'
const value = defineModel()
const { count, customAdd, scoped } = customize();
</script>
<style lang="less" scoped>
.preview-container {
  width: 100%;
  height: 100%;
  padding: 10px 15px;
  border: 1px solid #ccc;
}
</style>