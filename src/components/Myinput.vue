<template>
  <div>
    <p>二次封装的 input 组件</p>
    <component :is="renderInput" />
    <!-- <el-input v-bind="{ ...$attrs, ...props }" /> -->
  </div>
</template>
<script setup lang="ts">
import { h, useSlots } from 'vue';
import { ElInput } from 'element-plus';
import type { InputProps } from 'element-plus';

defineOptions({
  name: 'MyInput',
  inheritAttrs: false,
})
const data = defineModel('data');
const props = defineProps<Partial<InputProps>>();
const slots = useSlots();

const renderInput = () => {
  return h(ElInput, {
    ...Attr,
    ...props,
  }, {
    // 传递所有插槽
    default: slots.default,
    prefix: slots.prefix,
    suffix: slots.suffix,
    prepend: slots.prepend,
    append: slots.append
  });
};
</script>
<style scoped>
/* . */
</style>
