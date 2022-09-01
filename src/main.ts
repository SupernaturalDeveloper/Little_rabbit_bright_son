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

createApp(App).use(store).use(router).mount('#app')
