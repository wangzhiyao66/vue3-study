<template>
  <div class="demo-container">
    <h3>嵌套环形图演示</h3>
    <NestedRingEcharts :levels="chartLevels" :colors="['#FF6384', '#36A2EB', '#FFCE56']" default-height="400px" />
    <h3>嵌套环形图演示</h3>
    <NestedRingEcharts :levels="mockRingData" :colors="mockColors" :showBottomLegend="false" default-height="500px" />
  </div>
</template>

<script setup lang="ts">
import NestedRingEcharts from "./NestedRingEcharts.vue";
import { mockRingData, mockColors, chartLevels } from "./mockData.ts";
defineOptions({
  name: "NestedRingDemo",
});
</script>

<style scoped>
.demo-container {
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  margin: 20px 0;
}
</style>
