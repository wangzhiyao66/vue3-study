<template>
  <div class="echarts-demo">
    <h2>近一年中国降雨量分布</h2>
    <div ref="chart" class="chart-container"></div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted, ref } from 'vue';
import * as echarts from 'echarts';
import 'echarts/map/js/china.js';


const chart = ref<HTMLElement | null>(null);
let myChart: any;
onMounted(() => {
  if (chart.value) {
    myChart = echarts.init(chart.value);

    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} mm'
      },
      visualMap: {
        min: 0,
        max: 60000,
        text: ['高', '低'],
        realtime: false,
        calculable: true,
        inRange: {
          color: ['#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695']
        }
      },
      series: [{
        name: '降雨量',
        type: 'map',
        map: 'china',
        roam: true,
        emphasis: {
          label: {
            show: true
          }
        },
        data: [
          { name: '北京', value: 58200 },
          { name: '天津', value: 52100 },
          { name: '河北', value: 48300 },
          { name: '山西', value: 42200 },
          { name: '内蒙古', value: 35200 },
          { name: '辽宁', value: 47200 },
          { name: '吉林', value: 43200 },
          { name: '黑龙江', value: 38200 },
          { name: '上海', value: 59200 },
          { name: '江苏', value: 54200 },
          { name: '浙江', value: 56200 },
          { name: '安徽', value: 50200 },
          { name: '福建', value: 53200 },
          { name: '江西', value: 51200 },
          { name: '山东', value: 49200 },
          { name: '河南', value: 47200 },
          { name: '湖北', value: 49200 },
          { name: '湖南', value: 51200 },
          { name: '广东', value: 55200 },
          { name: '广西', value: 50200 },
          { name: '海南', value: 53200 },
          { name: '重庆', value: 48200 },
          { name: '四川', value: 45200 },
          { name: '贵州', value: 47200 },
          { name: '云南', value: 44200 },
          { name: '西藏', value: 32200 },
          { name: '陕西', value: 43200 },
          { name: '甘肃', value: 38200 },
          { name: '青海', value: 35200 },
          { name: '宁夏', value: 40200 },
          { name: '新疆', value: 31200 }
        ]
      }]
    };

    myChart.setOption(option);

    window.addEventListener('resize', () => {
      myChart.resize();
    });
  }
});

</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 600px;
  margin-top: 20px;
}
</style>