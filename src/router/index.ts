import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import pinia from '../store/store';
import { useLoginStore } from '../store/login';
import { useCartStore } from '../store';
const loginStore = useLoginStore(pinia);
const cartStore = useCartStore(pinia);
const routes: Array<RouteRecordRaw> = [
    // {
    //     path: '/',
    //     component: () => import('../pages/Home/HomeComponent.vue')
    // },
    {
<<<<<<< HEAD
        path: '/about',
        component: () => import('../pages/About/AboutComponent.vue')
    },
    {
        path: '/',
        component: () => import('../pages/Mine/MineComponent.vue')
    },
=======
        path: '/login',
        component: () => import('../pages/Login/Login.vue')
    },
    {
        path: '/cart',
        component: () => import('../pages/Cart/CartComponent.vue'),
        beforeEnter() {
            if (!loginStore.getToken) {
                // 如果没有登录将pinia数据缓存删除
                cartStore.ShoppingCartData = []
            }
        }
    },
    {
        path: '/homelist',
        name: 'homelist',
        component: () => import('../pages/Home/HomeList.vue'),
    },


    {
        path: '/category',
        component: () => import('../pages/Category/Category.vue')
    }, {
        path: '/detail',
        component: () => import('../pages/Detail/DetailComponent.vue')
    }
>>>>>>> fc220f3b30f25a4d3435ce0a5a889a9a87d5d18d
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
// 解决跳转后，滚动条位置问题
router.afterEach(() => {
    document.documentElement.scrollTo(0, 0);
})
export default router;