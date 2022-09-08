<template>
    <div class="swiper">
        <div class="cover-box">
            <ul class="menu">

                <li v-for="item,index in all" :key="item.id">
                    <span @click="toOneCate(index)">{{ item.name }}</span>
                    <span v-for="sub,i in item.children.slice(0, 2)" :key="sub.id" @click="getId(i,index)">{{ sub.name
                    }}</span>

                </li>
            </ul>
        </div>
        <SwiperView :swiper='swiper' />
    </div>
    <div class="new-hot">
        <NewsView />
        <HotView />
    </div>
    <div class="brand">
        <BrandView />
    </div>
    <div class="goods">
        <GoodsView />
    </div>
</template>


<script lang="ts" setup>
import { getFindBanner } from '../../api/home/index'
import { getFindSubCategoryFilter, getFindAllCategory } from '../../api/category/index'
import { watchEffect, reactive } from 'vue'
import { useRouter } from 'vue-router'


import NewsView from './NewsView.vue';
import HotView from './HotView.vue';
import BrandView from './BrandView.vue';
import GoodsView from './GoodsView.vue';

const swiper = reactive<Array<any>>([])
const category = reactive<Array<any>>([])
const all = reactive<Array<any>>([])
const router = useRouter()

watchEffect(async () => {
    let res = await getFindBanner()
    let res1 = await getFindSubCategoryFilter({ id: 1007000 })
    let res2 = await getFindAllCategory()
    swiper.push(...res.result)
    all.push(...res2.result)
})
function toOneCate(i:number){
    category.forEach((item:any,index:number)=>{
        if(i == index){
            console.log(item);
            router.push({
                path : '/homelist',
                query : {
                    id : item.id
                }
            })
        }
    })
}
async function getId(i: number, j: number) {
    let message = await getFindAllCategory()
    message.result[j].children.slice(0, 2).forEach((item: any, index: number) => {
        if (i == index) {
            console.log(item.id);
            router.push({
                path : '/category',
                query : {
                    id:item.id
                }
            })
        }
    })
}

</script>
<style lang="scss" scoped>
.swiper {
    width: 1240px;
    margin: 0 auto;
    position: relative;

    .cover-box {
        width: 250px;
        height: 500px;
        background: rgba(0, 0, 0, .8);
        position: absolute;
        z-index: 99;
        top: 0;
        left: 0;

        .menu {
            li {
                color: #fff;
                padding-left: 40px;
                height: 50px;
                line-height: 50px;
                font-size: 14px;
                cursor: pointer;

                span:first-child {
                    font-size: 18px;
                }

                span {
                    margin-right: 6px;
                }
            }

            :hover {
                background: #27ba9b;
            }
        }
    }
}

.goods {
    width: 100%;
}
</style>