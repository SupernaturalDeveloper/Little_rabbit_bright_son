import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import router from './router'
// pinia持久存储插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const store = createPinia();
store.use(piniaPluginPersistedstate);
// 样式重置
import './assets/style/reset.scss'
// element-plus消息提示引入
import 'element-plus/theme-chalk/el-message.css';

// element图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(store).use(router).mount('#app')
