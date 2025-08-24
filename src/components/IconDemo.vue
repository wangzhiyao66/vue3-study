<template>
  <div class="icon-demo">
    <h2>Element Plus 图标示例</h2>
    <div class="icon-grid">
      <div v-for="icon in icons" :key="icon" class="icon-item">
        <el-icon :size="30">
          <component :is="icon" />
        </el-icon>
        <span>{{ icon }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

export default defineComponent({
  name: 'IconDemo',
  setup() {
    const icons = Object.keys(ElementPlusIconsVue);
    return {
      icons
    };
  }
});
</script>

<style scoped>
.icon-demo {
  padding: 20px;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
  transition: all 0.3s;
}

.icon-item:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.icon-item span {
  margin-top: 10px;
  font-size: 12px;
  text-align: center;
  word-break: break-all;
}
</style>