import './assets/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// vue3 推荐使用
// ElementPlus 插件库   https://element-plus.sxtxhy.com/zh-CN/guide/quickstart.html
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// Element 插件库   https://element.eleme.cn/#/zh-CN/component/quickstart
import 'element-ui/lib/theme-chalk/index.css';
// import ElementUI from 'element-ui';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import App from './App.vue'
import router from './router'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
