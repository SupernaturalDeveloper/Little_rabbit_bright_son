import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../pages/Home/HomeComponent.vue'),
    },
    {
        path: '/about',
        component: () => import('../pages/About/AboutComponent.vue')
    },
    {
        path:'/mine',
        component: () => import('../pages/Mine/MineComponent.vue'),
        children:[
            {
                path:'',
                redirect:"mine/PersonalCenter",
            },
            {
                path:'PersonalCenter',
                component: () => import('../pages/Mine/routerComponents/PersonalCenter.vue'),
            },{
                path:'MyOrder',
                component: () => import('../pages/Mine/routerComponents/MyOrder.vue'),
            }
        ]
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;