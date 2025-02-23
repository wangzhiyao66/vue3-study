//解决 vue3 报错解决：无法找到模块“./components/Person.vue”的声明文件的问题。
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
