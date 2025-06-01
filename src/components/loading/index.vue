<!-- LoadingComponent.vue -->
<template>
  <div v-if="visible" class="loading-overlay">
    <div class="loading-spinner"></div> <!-- 这里可以是你的 loading 动画 -->
    <p>Loading...</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'LoadingComponent',
  setup() {
    const visible = ref(false);

    const show = () => {
      visible.value = true;
    };

    const hide = () => {
      visible.value = false;
    };

    return {
      visible,
      show,
      hide,
    };
  },
};
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-spinner {
  /* 你的 loading 动画样式 */
}
</style>
