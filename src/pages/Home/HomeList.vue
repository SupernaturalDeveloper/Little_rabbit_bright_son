<template>
    <div class="cate">
        <main>
            <CateHead :title="title"/>
            <SwiperView :swiper='swiper' />
            <CategoryList :list='list'/>
        </main>
    </div>
</template>
<script lang="ts" setup>
import { watchEffect,reactive,ref} from 'vue';
import {getFindTopCategory} from '../../api/category/index'
import { getFindBanner } from '../../api/home/index'
import {useRoute} from 'vue-router'
const list = reactive<Array<any>>([])
const swiper = reactive<Array<any>>([])
const route = useRoute()
let title = ref<string>('')
watchEffect(async ()=>{
	let _id:any = route.query.id
	let res = await getFindTopCategory({id : _id})
	let res2 = await getFindBanner()
	list.length = 0
	swiper.push(...res2.result)
	list.push(...res.result.children)
	title.value = res.result.name
})


</script>
<style lang="scss" scoped>
.cate {
    width: 100%;
}

main {
    width: 1240px;
    margin: 0 auto;
}
</style>