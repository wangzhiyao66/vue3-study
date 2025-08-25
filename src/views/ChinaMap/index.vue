<template>
  <div>
    <p>这里是 chinaMap 页面</p>
    <div class="my-map-box">
      <EChartsComponent :options="chartOptions" :height=height />
    </div>
  </div>
</template>

<script lang="ts" setup>
import EChartsComponent from '@/components/EChartsComponent.vue';
import * as echarts from 'echarts/core';

// 引入中国地图数据,注册中国地图
import chinaMap from '@/assets/json/china.json';
echarts.registerMap('china', chinaMap as any);

const height = '1000px'
function randomData() {
  return Math.round(Math.random() * 500);
}
const mydata = [
  { name: '北京市', value: randomData() }, { name: '天津市', value: randomData() },
  { name: '河北省', value: randomData() }, { name: '山西省', value: randomData() },
  { name: '内蒙古自治区', value: randomData() },
  { name: '辽宁省', value: randomData() }, { name: '吉林省', value: randomData() },
  { name: '黑龙江省', value: randomData() }, { name: '上海市', value: randomData() },
  { name: '江苏省', value: randomData() }, { name: '浙江省', value: randomData() },
  { name: '安徽省', value: randomData() }, { name: '福建省', value: randomData() },
  { name: '江西省', value: randomData() }, { name: '山东省', value: randomData() },
  { name: '河南省', value: randomData() }, { name: '湖北省', value: randomData() },
  { name: '湖南省', value: randomData() }, { name: '广东省', value: randomData() },
  { name: '广西壮族自治区', value: randomData() },
  { name: '海南省', value: randomData() }, { name: '重庆市', value: randomData() },
  { name: '四川省', value: randomData() }, { name: '贵州省', value: randomData() },
  { name: '云南省', value: randomData() }, { name: '西藏自治区', value: randomData() },
  { name: '陕西省', value: randomData() }, { name: '甘肃省', value: randomData() },
  { name: '青海省', value: randomData() }, { name: '宁夏回族自治区', value: randomData() },
  { name: '新疆维吾尔自治区', value: randomData() },
  { name: '台湾省', value: randomData() }, { name: '香港特别行政区', value: randomData() },
  { name: '澳门特别行政区', value: randomData() }
];
const chartOptions = {
  title: {
    text: 'ChinaMap ECharts 示例',
    subtext: '数据来源于网络',
    x: 'center',
    textStyle: {
      color: '#000',
      fontWeight: 'normal',
      fontSize: 16,
    },
    subtextStyle: {
      color: '#fff',
      fontWeight: 'normal',
      fontSize: 12,
    }
  },
  grid: {
    x: '3%',
    y: '3%',
    width: '94%',
    height: '70%',
    containLabel: true,
  },
  tooltip: {
    trigger: 'item'
  },
  visualMap: {
    show: false,
    x: 'left',
    y: 'bottom',
    splitList: [
      { start: 500, end: 600 }, { start: 400, end: 500 },
      { start: 300, end: 400 }, { start: 200, end: 300 },
      { start: 100, end: 200 }, { start: 0, end: 100 },
    ],
    calculable: true,
    text: ['高', '低'],
    textStyle: {
      // color: '#000'
    },
    inRange: {
      color: ['#5bc2e7', '#6980c5', '#70dfdf', '#f7f1ee', '#3390FF'],
      symbolSize: [50, 800]
    }

  },
  series: [{
    name: '各省份的总成交量对比',
    type: 'map',
    mapType: 'china',
    roam: true,
    zoom: 1.1,
    label: {
      color: '#000',
      normal: {
        show: true, // 是否显示省份标签
        textStyle: {
          color: '#fff'
        }
      },
      emphasis: {
        show: true, // 是否突出显示省份标签
        areaStyle: {
          color: '#00FF00' // 区域颜色  自定义区域样式
        }
      }
    },
    data: mydata
  }]
};
</script>
<style lang="less" scoped>
.my-map-box {
  width: 100%;
  // height: 500px;
  border: 1px solid #ccc;
}
</style>