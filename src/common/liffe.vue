<template>
  <div>
    <p>这里是 lift 页面 {{ count }}</p>
  </div>
</template>
<style lang="less" scoped></style>
<script lang="ts">
// 你需要使用到什么生命周期，就引出来什么生命周期
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref,
  watchEffect,
} from 'vue'

export default {
  name: 'HomeView',
  setup() {
    const count = ref(0)
    onBeforeMount(() => {
      count.value++
      console.log('onBeforeMount', count.value)
    })
    onMounted(() => {
      count.value++
      console.log('onMounted', count.value)
    })
    // 注意，onBeforeUpdate 和 onUpdated 里面不要修改值，会死循环的哦！
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate', count.value)
    })
    onUpdated(() => {
      console.log('onUpdated', count.value)
    })
    onBeforeUnmount(() => {
      count.value++
      console.log('onBeforeUnmount', count.value)
    })
    onUnmounted(() => {
      count.value++
      console.log('onUnmounted', count.value)
    })
    // 定义一个函数，修改 count 的值。
    const countAdd = () => {
      count.value++
    }
    watchEffect(() => {
      console.log('触发了响应式监听', count.value)
    })
    return {
      count,
      countAdd,
    }
  },
}
</script>
