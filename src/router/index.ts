import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
    // {
    //     path: '/',
    //     component: () => import('../pages/Home/HomeComponent.vue')
    // },
    {
        path: '/about',
        component: () => import('../pages/About/AboutComponent.vue')
    },
    {
        path: '/',
        component: () => import('../pages/Mine/MineComponent.vue')
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;