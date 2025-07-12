<template>
  <div class="slot-usage-demo">
    <h2>Vue 3 插槽使用示例</h2>
    
    <SlotDemo>
      <!-- 默认插槽内容 -->
      <p>这是默认插槽的内容</p>
      
      <!-- 具名插槽内容 -->
      <template #header>
        <h3 style="color: blue">这是具名插槽header的内容</h3>
      </template>
      
      <!-- 作用域插槽内容 -->
      <template #footer="slotProps">
        <div style="border: 1px dashed #999; padding: 10px">
          <p>接收到的用户数据：{{ slotProps.user.name }}, {{ slotProps.user.age }}岁</p>
          <p>消息：{{ slotProps.message }}</p>
        </div>
      </template>
    </SlotDemo>
  </div>
</template>

<script setup lang="ts">
import SlotDemo from './SlotDemo.vue'
</script>

<style scoped>
.slot-usage-demo {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
</style>