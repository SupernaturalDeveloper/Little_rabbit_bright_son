import { createApp } from 'vue'
import App from './App.vue'
import pinia from './store/store'
import router from './router'
// pinia持久存储插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

pinia.use(piniaPluginPersistedstate);
// 样式重置
import './assets/style/reset.scss'

// element图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import imgLazy from './utils/imgLazy'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}


app.use(pinia).use(router).use(imgLazy).mount('#app')

