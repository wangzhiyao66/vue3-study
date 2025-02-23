<template>
  <div>
    <p>这里是 TaskView 页面</p>
    <div>
      <EChartsComponent :options="chartOptions" :height=height />
    </div>
  </div>
</template>
<style lang="less" scoped></style>
<script lang="ts" setup>
import EChartsComponent from '@/components/EChartsComponent.vue';

const height = '350px'
const chartOptions = {
  title: {
    text: 'ECharts 示例',
  },
  tooltip: {},
  xAxis: {
    data: ['类目1', '类目2', '类目3', '类目4', '类目5', '类目6'],
  },
  yAxis: {},
  series: [
    {
      name: '数值',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};
</script>
