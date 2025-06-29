<template>
  <div>
    <p> 二次封装的 input 组件</p>
    <el-input v-bind="{ $attrs, ...props }" /><el-button type="primary">Primary</el-button>
    <component :is='h(ElInput, { ...$attrs, ...props }, $slots)'></component>
  </div>
</template>
<script setup lang="ts">
import type { InputProps } from 'element-plus/lib/components/index.js';
import { ElInput } from 'element-ui/types/input';
import { h } from 'vue';

defineOptions({
  name: 'MyInput'
})
const input = defineModel();
const props = defineProps<Partial<InputProps>>();
</script>
<style scoped>
/* . */
</style>