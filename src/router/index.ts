import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../pages/Home/HomeComponent.vue')
    },
    {
        path: '/about',
        component: () => import('../pages/About/AboutComponent.vue')
    },
    {
        path: '/login',
        component: () => import('../pages/Login/Login.vue')
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;