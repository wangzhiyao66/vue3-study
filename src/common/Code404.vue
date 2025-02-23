<template>
    <div class="notfound">
        <p class="msg"> code404 页面未找到 !</p>
        <p class="gologin" @click="goto">点击重新登录</p>
    </div>
</template>
<style lang="less" scoped>
  .notfound{
    width: 200px;
    height: 60px;
    // background-color: blanchedalmond;
    position: absolute;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .gologin{
    font-size: 18px;
    text-align: center;
    &&:hover{
      cursor: pointer;
      color: blue;
    }
  }
  .msg {
    font-size: 18px;
    color: red;
    text-align: center;
  }
</style>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Code404',
  setup() {
    function goto() {
      this.$router.push('/login')
    }
    return {
      goto
    }
  }
})
</script>
