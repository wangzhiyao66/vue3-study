<template>
  <div>
    <p>这里是 UserCenterView 页面 {{ idList[0] }}</p>
    <div class="timelineBox">
      <div class="timeItem">
        <div class="timeline-title">预计达成：{{ idList[0] }}</div>
        <div class="timeline-content">
          <TimeLine />
        </div>
      </div>
    </div>
    <div class="timelineBox">
      <div class="timeItem">
        <div class="timeline-title">实际达成：{{ idList[1] }}</div>
        <div class="timeline-content">
          <TimeLine />
        </div>
      </div>
    </div>
    <div class="timelineBox">
      <div class="timeItem">
        <div class="timeline-title">付款达成：{{ idList[2] }}</div>
        <div class="timeline-content">
          <TimeLine />
        </div>
      </div>
    </div>
    <div class="timelineBox">
      <div class="timeItem">
        <div class="timeline-title">开票达成：{{ idList[3] }}</div>
        <div class="timeline-content">
          <TimeLine />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import TimeLine from '@/components/TimeLine/index.vue';
import { useId } from 'vue';
defineComponent({
  components: {
    TimeLine
  }
});
const idList = [useId(), useId(), useId(), useId()];
</script>
<style lang="less" scoped>
.timelineBox {
  width: 100%;
  height: 100%;
  padding: 20px 30px;
  background: #fff;
  border: 1px dotted #ccc;


  .timeItem {
    width: 100%;
    height: 100%;


    .timeline-title {
      display: inline-block;
      width: 100px;
      min-height: 200px;
      text-align: center;
      vertical-align: top;
    }

    .timeline-content {
      display: inline-block;
      width: calc(100% - 100px);
      min-height: 200px;
    }

  }
}

.timeline {
  list-style: none;
  display: inline-block;
  width: calc(100% - 100px);

  li {
    display: inline-block;
    width: 16%;
    height: 150px;
    background: #fff;
  }

  .item-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    position: relative;
  }

  .icon {
    display: inline-block;
    width: 45px;
    height: 45px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 50%;

  }

  .bg {
    border-color: red;
  }

  .line {
    // width: calc(dotted(100% - 45px) / 2);
    width: calc(100% - 45px);
    height: 30px;
    border-bottom-width: 2px;
    border-bottom-style: dotted;
    // border-bottom: 2px dotted;
    text-align: center;
    position: absolute;
    left: calc(-50% + 22.5px);
    top: -5px;
  }

  .tip {
    width: 300px;
    text-align: center;
    position: relative;
    left: 50%;
  }
}

.timeline li:first-child .line {
  display: none;
}
</style>
