
export const mockColors = [
  '#FF6384', '#36A2EB', '#FFCE56', // 第一层颜色
  '#4BC0C0', '#9966FF', '#FF9F40', // 第二层颜色
  '#8AC24A', '#EA80FC', '#00ACC1'  // 第三层颜色
];
export const mockRingData = [
  {
    name: "第一层级",
    data: [
      { name: "类别A", value: 335, itemStyle: { color: mockColors[0] } },
      { name: "类别B", value: 310, itemStyle: { color: mockColors[1] } },
      { name: "类别C", value: 234, itemStyle: { color: mockColors[2] } }
    ]
  },
  {
    name: "第二层级",
    data: [
      { name: "子类别A1", value: 135, itemStyle: { color: mockColors[3] } },
      { name: "子类别A2", value: 120, itemStyle: { color: mockColors[4] } },
      { name: "子类别A3", value: 80, itemStyle: { color: mockColors[5] } },
      { name: "子类别B1", value: 110, itemStyle: { color: mockColors[6] } },
      { name: "子类别B2", value: 90, itemStyle: { color: mockColors[7] } },
      { name: "子类别B3", value: 110, itemStyle: { color: mockColors[8] } }
    ]
  },
  {
    name: "第三层级",
    data: [
      { name: "细分A1-1", value: 55, itemStyle: { color: mockColors[0] } },
      { name: "细分A1-2", value: 35, itemStyle: { color: mockColors[1] } },
      { name: "细分A2-1", value: 40, itemStyle: { color: mockColors[2] } },
      { name: "细分B1-1", value: 30, itemStyle: { color: mockColors[3] } },
      { name: "细分B1-2", value: 20, itemStyle: { color: mockColors[4] } },
      { name: "细分B2-1", value: 25, itemStyle: { color: mockColors[5] } }
    ]
  },
];
export const chartLevels = [
  {
    name: "内环",
    data: [
      {
        name: "房地产公司现有三产",
        value: 335,
        itemStyle: {
          color: "#5470c6",
        },
        labelLine: {
          length: 50,
          length2: 50,
        },
      },
      {
        name: "其他",
        value: 1313,
        itemStyle: {
          color: "#91cc75",
        },
        labelLine: {
          length: 10,
          length2: 10,
        },
      },
    ],
  },
];