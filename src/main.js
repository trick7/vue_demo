import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/less/index.less'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'
import '@/api/mock.js'
import api from '@/api/api'
const pinia = createPinia()
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// app.config.globalProperties.$api = api //全局注册api
app.use(pinia)
app.use(router)
app.mount('#app')
