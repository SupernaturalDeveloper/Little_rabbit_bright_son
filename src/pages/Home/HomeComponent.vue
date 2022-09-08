<template>
    <div class="swiper">
        <div class="cover-box">
            <ul class="menu">
                <li v-for="item,i in category" :key="item.id">
                    <span>{{ item.name }}</span>
                    <span v-for="sub in item.children.slice(0, 2)" :key="sub.id" @click="go(item.id)">{{ sub.name }}</span>
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
import { getFindAllCategory } from '../../api/category/index'
import { watchEffect, reactive } from 'vue'
import NewsView from './NewsView.vue';
import HotView from './HotView.vue';
import BrandView from './BrandView.vue';
import GoodsView from './GoodsView.vue';
import { useRouter } from 'vue-router';

const swiper = reactive<Array<any>>([])
const category = reactive<Array<any>>([])
watchEffect(async () => {
    let res = await getFindBanner()
    let res1 = await getFindAllCategory()
    swiper.push(...res.result)
    category.push(...res1.result)
    console.log(res.result);
    
})
const router=useRouter()
	function go(hr:string){
        console.log(hr);  
		router.push({
			path:'/category',
			query:{
				id:hr
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
                span:first-child{
                    font-size: 18px;
                }
                span{
                    margin-right: 6px;
                }
            }
            :hover{
                background: #27ba9b;
            }
        }
    }
}

.goods {
    width: 100%;
}

</style>