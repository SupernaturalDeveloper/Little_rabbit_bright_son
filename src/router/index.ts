import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../pages/Home/HomeComponent.vue')
    },
    {
        path: '/login',
        component: () => import('../pages/Login/Login.vue')
    },
    {
        path: '/cart',
        component: () => import('../pages/Cart/CartComponent.vue')
    },
<<<<<<< HEAD
		{
		    path: '/category',
		    component: () => import('../pages/Category/Category.vue')
		}
=======
    {
        path : '/homelist',
        name : 'homelist',
        component : ()=>import('../pages/Home/HomeList.vue'),
    },

    {
        path: '/cart',
        component: () => import('../pages/Cart/CartComponent.vue')
    },
    {
        path: '/category',
        component: () => import('../pages/Category/Category.vue')
    },{
        path : '/detail',
        component : ()=>import('../pages/Detail/DetailComponent.vue')
    }
>>>>>>> dcce172d3aa57768d7cbd49bacaab5874f402776
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;