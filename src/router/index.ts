import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../pages/Home/HomeComponent.vue')
    },
    {
        path: '/family',
        component: () => import('../pages/Home/homelist/FamilyView.vue')
    },
    {
        path: '/foods',
        component: () => import('../pages/Home/homelist/FoodView.vue')
    },
    {
        path: '/trappings',
        component: () => import('../pages/Home/homelist/TrappingsView.vue')
    },
    {
        path: '/motherhood',
        component: () => import('../pages/Home/homelist/MotherhoodView.vue')
    },
    {
        path: '/personalcare',
        component: () => import('../pages/Home/homelist/PersonalCareView.vue')
    },
    {
        path: '/strictly',
        component: () => import('../pages/Home/homelist/StrictlyView.vue')
    },
    {
        path: '/digital',
        component: () => import('../pages/Home/homelist/DigitalView.vue')
    },
    {
        path: '/motion',
        component: () => import('../pages/Home/homelist/MotionView.vue')
    },
    {
        path: '/groceries',
        component: () => import('../pages/Home/homelist/GroceriesView.vue')

    },
    {
        path: '/cart',
        component: () => import('../pages/Cart/CartComponent.vue')
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;