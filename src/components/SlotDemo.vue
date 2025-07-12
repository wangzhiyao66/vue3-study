<template>
  <div class="slot-demo">
    <!-- 默认插槽 -->
    <div class="default-slot">
      <h3>默认插槽内容：</h3>
      <slot></slot>
    </div>

    <!-- 具名插槽 -->
    <div class="named-slot">
      <h3>具名插槽内容：</h3>
      <slot name="header"></slot>
    </div>

    <!-- 作用域插槽 -->
    <div class="scoped-slot">
      <h3>作用域插槽内容：</h3>
      <slot name="footer" :user="user" :message="message"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const user = ref({
  name: '张三',
  age: 30
})

const message = ref('这是来自子组件的数据')
</script>

<style scoped>
.slot-demo {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px 0;
}
.default-slot, .named-slot, .scoped-slot {
  margin: 10px 0;
  padding: 10px;
  background-color: #f5f5f5;
}
</style>