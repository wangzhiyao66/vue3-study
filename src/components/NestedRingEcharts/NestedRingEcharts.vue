<template>
  <div ref="nestedRingEchartRef" :style="`width: 100%; height: ${echartsHeight}`"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick, watch } from "vue";
import * as echarts from "echarts";
import type { PieSeriesOption } from "echarts";

type RingLevel = {
  name: string;
  data: Array<{
    name: string;
    value: number;
    itemStyle?: {
      color?: string;
    };
  }>;
};

defineOptions({
  name: "NestedRingEcharts",
  inheritAttrs: false,
});

const props = defineProps({
  defaultHeight: {
    type: String,
    default: "",
  },
  levels: {
    type: Array as () => RingLevel[],
    default: () => [],
    required: true,
  },
  colors: {
    type: Array as () => string[],
    default: () => [
      "#5470c6",
      "#91cc75",
      "#fac858",
      "#ee6666",
      "#73c0de",
      "#3ba272",
      "#fc8452",
      "#9a60b4",
    ],
  },
  showBottomLegend: {
    // 是否显示图例
    type: Boolean,
    default: true,
  },
  postLeft: {
    // 图例左侧位置
    type: String,
    default: "center",
  },
  labelFormatter: {
    type: Function,
    default: (name: string, value: number, percent: number) =>
      `${name}: ${value} (${percent.toFixed(2)}%)`,
  },
});

const echartsHeight = ref(props.defaultHeight || "300px");
const nestedRingEchartRef = ref<HTMLDivElement | null>(null);
let chartInstance: echarts.ECharts | null = null;

// 初始化图表
const initChart = () => {
  if (!nestedRingEchartRef.value) return;

  chartInstance = echarts.init(nestedRingEchartRef.value);
  updateChart();
  window.addEventListener("resize", handleResize);
};

// 更新图表数据
const updateChart = () => {
  if (!chartInstance || !props.levels.length) return;

  const option: echarts.EChartsOption | any = {
    animation: true,
    animationDuration: 1000,
    animationEasing: "cubicOut",
    tooltip: {
      trigger: "item",
      formatter: ({ name, value, percent }) =>
        props.labelFormatter(
          name as string,
          value as number,
          percent as number
        ),
      position: (point, params, dom, rect, size) => {
        // 确保tooltip不会超出视图
        const [x, y] = point;
        const [width, height] = size.contentSize;
        const viewWidth = chartInstance?.getWidth() || 0;
        const viewHeight = chartInstance?.getHeight() || 0;

        return [
          x + width > viewWidth ? x - width : x,
          y + height > viewHeight ? y - height : y,
        ];
      },
    },
    legend: props.showBottomLegend
      ? {
        bottom: "0%",
        left: props.postLeft ? props.postLeft : "center",
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 20,
        data: props.levels.flatMap((level) =>
          level.data.map((item) => item.name)
        ),
      }
      : { show: false },
    series: props.levels.map(
      (level, index): PieSeriesOption => ({
        name: level.name,
        type: "pie",
        radius:
          index === 0
            ? [`${3}%`, `${20}%`] // 最内层环宽加倍
            : [`${30 + (index - 1) * 20}%`, `${40 + (index - 1) * 20}%`], // 其他层保持原逻辑
        avoidLabelOverlap: false,
        label: {
          show: true,
          formatter: ({ name, value, percent }) =>
            props.labelFormatter(
              name as string,
              value as number,
              percent as number
            ),
        },
        emphasis: {
          scale: true,
          scaleSize: 10,
          focus: "self",
          label: {
            show: true,
            fontSize: "18",
            fontWeight: "bold",
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        labelLine: {
          show: true,
        },
        data: level.data.map((item) => ({
          ...item,
          itemStyle: item.itemStyle || {
            color: props.colors[index % props.colors.length],
          },
        })),
      })
    ),
  };

  chartInstance.setOption(option);
};
// 监听props变化
watch(() => props.levels, updateChart, { deep: true });
watch(() => props.colors, updateChart);
watch(() => props.showBottomLegend, updateChart);

const handleResize = () => {
  chartInstance?.resize();
};

const setHeight = (heightVal: string) => {
  echartsHeight.value = heightVal;
  nextTick(() => chartInstance?.resize());
};

// 点击事件处理
const handleChartClick = (params: any) => {
  if (params.componentType === "series") {
    // 可以在此处添加自定义点击逻辑
    console.log("Chart clicked:", params);
  }
};

onMounted(() => {
  initChart();
  // 添加点击事件监听
  chartInstance?.on("click", handleChartClick);
});

onUnmounted(() => {
  // 移除事件监听
  chartInstance?.off("click", handleChartClick);
  chartInstance?.dispose();
  window.removeEventListener("resize", handleResize);
});

defineExpose({
  setHeight,
  initChart,
  updateChart,
});
</script>
