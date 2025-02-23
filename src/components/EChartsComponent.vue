<template>
  <div :id="id" :class="className" :style="{ width: width, height: height }"></div>
</template>
<style lang="less"></style>
<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import * as echarts from 'echarts';

const emit = defineEmits(['update']);
const handleClick = () => {
  emit('update', 'newValue') // 触发 'update' 事件，并传递参数
}
// 定义组件接收的属性
const props = defineProps({
  id: {
    type: String,
    default: 'chart'
  },
  className: {
    type: String,
    default: 'chart'
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '300px'
  },
  options: {
    type: Object,
    default: () => ({}),
  },
  autoresize: {
    type: Boolean,
    default: true,
  },
});

// 引用图表容器
// const chartRef = ref<HTMLDivElement | null>(null);

// ECharts实例
let chartInstance: echarts.ECharts | null = null;

// 初始化图表
const initChart = () => {
  if (document.getElementById(props.id)) {
    // 绑定图表实例
    chartInstance = echarts.init(document.getElementById(props.id) as HTMLDivElement);
    // chartInstance = echarts.init(chartRef.value);
    chartInstance.setOption(props.options);
  }
};

// 监听窗口大小变化，自动调整图表大小
const resizeChart = () => {
  if (chartInstance) {
    chartInstance.resize();
  }
};

// 组件挂载时初始化图表
onMounted(() => {
  initChart();

  // 如果开启了自动调整大小，则监听窗口大小变化
  if (props.autoresize) {
    window.addEventListener('resize', resizeChart);
  }
});

// 监听options属性的变化，并在变化时更新图表配置
watch(
  () => props.options,
  () => {
    if (chartInstance) {
      chartInstance.setOption(props.options);
    }
  },
  { deep: true }
);

// 组件卸载时销毁图表实例并移除监听器
onUnmounted(() => {
  if (chartInstance) {
    chartInstance.dispose();
    chartInstance = null;
  }

  // 移除窗口大小变化监听器
  if (props.autoresize) {
    window.removeEventListener('resize', resizeChart);
  }
});
</script>
