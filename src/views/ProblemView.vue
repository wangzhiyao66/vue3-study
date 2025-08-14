<template>
  <div>
    <p>这里是 ProblemView 页面</p>
    <Myinput :value="url3"></Myinput>
  </div>
</template>
<style lang="less" scoped></style>
<script lang="ts" setup>
import { getParam, getQueryParams } from '@/utils'
import Myinput from '@/components/Myinput.vue'
defineOptions({
  name: 'ProblemView'
})

let url = 'https://example.com/page?param1=value1&param2=value2'
let url2 = 'http://www.wheelsfactory.cn/detail?id=55&name=张三'
let url3 = 'http://www.wheelsfactory.cn/detail?id=55&name=张三&age=20'
console.log('url2 ==  ', getParam(url))
/**
 * URL {
 *  href: 'https://example.com/page?param1=value1&par·am2=value2',
 *  origin: 'https://example.com',
 *  protocol: 'https:',
 *  username: '',
 *  password: '',
 *  host: 'example.com',
 *  hostname: 'example.com',
 *  port: '',
 *  pathname: '/page',
 *  search: '?param1=value1&param2=value2',
 * }
 *  searchParams: URLSearchParams { 'param1' => 'value1', 'param2' => 'value2' },
 *
*/
console.log('url2 ==  ', getParam(url).searchParams.get('param1'))
/**
 * value1
 */
console.log('url3 ==  ', getQueryParams(new URL(url3).search))
/**
 * { id: '55', name: '张三', age: '20' }
 */
console.log('url4 ==  ', Object.fromEntries(new URLSearchParams(url3)))
/**
 * {http://www.wheelsfactory.cn/detail?id: '55', name: '张三', age: '20'}
 */
console.log('url5 ==  ', Object.fromEntries(new URL(url3).searchParams))
/**
 * { id: '55', name: '张三', age: '20' }
 */
let list = [
  { id: '1', name: '张三', age: 3 },
  { id: '2', name: '张三', age: 2 },
  { id: '3', name: '张三', age: 1 }
];
</script>
