import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import router from './router'
const store = createPinia();
// 样式重置
import './assets/style/reset.scss'

createApp(App).use(store).use(router).mount('#app')
