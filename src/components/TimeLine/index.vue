<template>
  <!-- <div :key="componentKey" class="box"> -->
  <ul :key="componentKey" class="timeline">
    <li v-for="item in dataList" :key="item">
      <div class="item-box">
        <!-- <span class="icon bg" /> -->
        <span :class="[item.staus == '' ? 'icon bg' : 'icon bg' + item.staus]" />
        <span class="title">{{ item.title }}</span>
        <span class="time">{{ item.time }}</span>
        <span :class="[item.staus == '' ? 'line bc' : 'line bc' + item.staus]"><span v-if="item.line">SLA: {{
          item.line
            }}天</span></span>
        <span v-if="item.tip" class="tip">请在{{ item.tip }} 日前完成付款（含退换货）</span>
      </div>
    </li>
  </ul>
  <!-- </div> -->
</template>
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  dataList: {
    type: <any>[],
    default: () => [
      { title: '创建时间', time: '2025-04-20', line: '', staus: '', tip: '' },
      { title: '创建时间', time: '2025-04-20', line: '1', staus: '1', tip: '' },
      { title: '创建时间', time: '2025-04-20', line: '2', staus: '2', tip: '' },
      { title: '创建时间', time: '2025-04-20', line: '3', staus: '3', tip: '' },
      { title: '创建时间', time: '2025-04-20', line: '4', staus: '4', tip: '' },
      { title: '创建时间', time: '2025-04-20', line: '5', staus: '5', tip: '' }
    ],
    required: false,
  }
})

const componentKey = ref(0);
const dataList = ref(props.dataList);

</script>
<style lang="less" scoped>
.timeline {
  display: inline-block;
  list-style: none;
  width: calc(100% - 100px);
  min-width: 1200px;
  height: 150px;
  padding: 10px 0px;

  li {
    /* display: inline-block; */
    float: left;
    width: 16%;
    min-width: 200px;
    height: 150px;
    background: #fff;
  }

  .item-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }

  .icon {
    display: inline-block;
    width: 48px;
    height: 48px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 50%;
  }

  .line {
    width: calc(100% - 48px);
    height: 30px;
    line-height: 100%;
    border-bottom-width: 2px;
    border-bottom-style: dotted;
    text-align: center;
    position: absolute;
    left: calc(-100% + 46px);
    top: -3px;
    color: rgba(66, 76, 87, 1);
    font-size: 15px;
  }

  .tip {
    width: 320px;
    padding-left: 25px;
    color: rgba(143, 83, 23, 1);
    background-color: rgba(253, 249, 233, 1);
    background-image: url("../../assets/image/tip.svg");
    background-repeat: no-repeat;
    background-position: 2px 2px;
    background-size: 20px 20px;
    font-size: 14px;
    line-height: 150%;
    text-align: left;
  }

  .bg {
    background-color: rgba(246, 247, 249, 1);
    border-color: rgba(198, 199, 199, 1);
    background-image: url("../../assets/image/noStart.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 26px 26px;
  }

  .bc {
    border-color: rgba(198, 199, 199, 1);
  }

  .bg1 {
    border-color: rgba(49, 176, 100, 1);
    background-color: rgba(67, 207, 124, 1);
    background-image: url("../../assets/image/done.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 26px 26px;
  }

  .bc1 {
    border-color: rgba(49, 176, 100, 1);
  }

  .bg2 {
    background-color: rgba(37, 137, 255, 1);
    border-color: rgba(34, 116, 207, 1);
    background-image: url("../../assets/image/loading.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 26px 26px;
    transform: rotate(45deg);
  }

  .bc2 {
    border-color: rgba(34, 116, 207, 1);
  }

  .bg3 {
    border-color: rgba(212, 48, 48, 1);
    background-color: rgba(212, 48, 48, 1);
    background-image: url("../../assets/image/start.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 26px 26px;
  }

  .bc3 {
    border-color: rgba(212, 48, 48, 1);
  }

  .bg4 {
    border-color: rgba(212, 48, 48, 1);
    background-color: rgba(212, 48, 48, 1);
    background-image: url("../../assets/image/loading.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 26px 26px;
    transform: rotate(45deg);
  }

  .bc4 {
    border-color: rgba(212, 48, 48, 1);
  }

  .bg5 {
    border-color: rgba(212, 48, 48, 1);
    background-color: rgba(212, 48, 48, 1);
    background-image: url("../../assets/image/done.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 26px 26px;
  }

  .bc5 {
    border-color: rgba(212, 48, 48, 1);
  }

  .title {
    margin-top: 11px;
    color: rgba(66, 76, 87, 1);
    font-size: 15px;
  }

  .time {
    height: 23px;
    line-height: 23px;
    color: rgba(66, 76, 87, 1);
    font-size: 15px;
  }
}

.timeline li:first-child .line {
  display: none;
}
</style>