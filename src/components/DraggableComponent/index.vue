<template>
  <div id="draggable-box">
    <div class="draggable" ref="draggableRef" :style="{ left: position.x + 'px', top: position.y + 'px' }"
      @mousedown="startDrag">
      拖拽我
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { throttle } from '@/utils/throttle';
import { ref, onMounted, onUnmounted } from 'vue';

const position = ref({ x: 0, y: 0 });
let active = false;
let currentX, currentY, initialX: number, initialY: number;
let rect: DOMRect | any;
const draggableRef = ref<HTMLElement>();
const startDrag = (event: { clientX: number; clientY: number; }) => {
  initialX = event.clientX - position.value.x;
  initialY = event.clientY - position.value.y;
  active = true;
};

const stopDrag = () => {
  active = false;
};

const drag = (event: { clientX: number; clientY: number; }) => {
  if (active) {
    currentX = event.clientX - initialX;
    currentY = event.clientY - initialY;
    const maxX = window.innerWidth - rect.width; // 视窗宽度减去元素宽度，防止溢出
    const maxY = window.innerHeight - rect.height; // 视窗高度减去元素高度，防止溢出
    position.value.x = Math.max(0, Math.min(maxX, currentX)); // 限制X轴范围
    position.value.y = Math.max(0, Math.min(maxY, currentY)); // 限制Y轴范围
  }
};

onMounted(() => {
  rect = draggableRef.value?.getBoundingClientRect(); // 获取元素尺寸和位置信息，仅在挂载后执行一次，避免性能问题
  window.addEventListener('mousemove',
    drag
  );
  window.addEventListener('mouseup',
    stopDrag
  );
});

onUnmounted(() => {
  window.removeEventListener('mousemove', drag);
  window.removeEventListener('mouseup', stopDrag);
});
</script>
<style>
.draggable {
  position: absolute;
  cursor: grab;
  width: 100px;
  height: 100px;
  background-color: lightblue;
  text-align: center;
  line-height: 100px;
  user-select: none;
  /* 防止文本被选中 */
}
</style>