<template>
    <div class="person">
        <main>
            <CateHead :title="title"/>
            <SwiperView :swiper='swiper' />
            <CategoryList :list='list'/>
        </main>
    </div>
</template>
<script lang="ts" setup>
import { watchEffect,reactive,ref} from 'vue';
import {getFindTopCategory} from '../../../api/category/index'
import { getFindBanner } from '../../../api/home/index'
const list = reactive<Array<any>>([])
const swiper = reactive<Array<any>>([])
let title = ref<string>('')
watchEffect(async ()=>{
    let res = await getFindTopCategory({id : 1013001})
    let res2 = await getFindBanner()
    list.push(...res.result.children)
    swiper.push(...res2.result)
    title.value = res.result.name
})
</script>
<style lang="scss" scoped>
.person {
    width: 100%;
}

main {
    width: 1240px;
    margin: 0 auto;
}
</style>