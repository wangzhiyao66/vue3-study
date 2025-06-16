<template>
  <div>
    <p>这里是 ProblemView 页面</p>
  </div>
</template>
<style lang="less" scoped></style>
<script lang="ts" setup>
import { getParam, getQueryParams } from '@/utils'




defineOptions({
  name: 'ProblemView'
})

let url = 'https://example.com/page?param1=value1&param2=value2'
let url2 = 'http://www.wheelsfactory.cn/detail?id=55&name=张三'
let url3 = 'http://www.wheelsfactory.cn/detail?id=55&name=张三&age=20'
console.log('url2 ==  ', getParam(url))
console.log('url2 ==  ', getParam(url).searchParams.get('param1'))
console.log('url3 ==  ', getQueryParams(new URL(url3).search))
console.log('url4 ==  ', Object.fromEntries(new URLSearchParams(new URL(url3).search)))
console.log('url5 ==  ', Object.fromEntries(new URL(url3).searchParams))
</script>
