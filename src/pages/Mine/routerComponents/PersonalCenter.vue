<!-- PersonalCenter个人中心 -->
<template>
    <!-- 概述/顶部 -->
    <personal-center-overview></personal-center-overview>

    <!-- 我的收藏 -->
    <home-pane title="我的收藏" :msg="myCollect"></home-pane>

    <!-- 我的足迹 -->
    <home-pane title="我的足迹" :msg="myFootprint"></home-pane>

    <!-- 猜你喜欢 -->
    <carousel-view></carousel-view>
</template>

<script setup lang="ts">
    import PersonalCenterOverview from '../components/PersonalCenterOverview.vue'
    import HomePane from '../../../components/common/HomePane.vue'
    import CarouselView from '../../../components/common/CarouselView.vue'
    import { reactive } from "@vue/reactivity";
    let myCollect = reactive([
        {
            url:'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_6.jpg',
            name:"所不验向主三往书务定响此知此清见本都影",
            desc:"土单运且半小设",
            price:"¥160.26"
        },
        {
            url:'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_3.jpg',
            name:"适史算厂存则千细素是书育细准青",
            desc:"去阶老点深受",
            price:"¥189.36"
        },
        {
            url:'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_7.jpg',
            name:"年流因太象至议车团进做起外青系",
            desc:"况有叫此用全发矿",
            price:"¥173.42"
        },
        {
            url:'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_8.jpg',
            name:"而取派记任东然造生本元龙很和位事属水",
            desc:"需便儿千建百养常几",
            price:"¥119.15"
        },
    ])
    let myFootprint = reactive([
        {
            url:'https://yanxuan-item.nosdn.127.net/fcdcb840a0f5dd754bb8fd2157579012.jpg',
            name:"自煮火锅不排队 麦饭石不粘鸳鸯火锅",
            desc:"清汤鲜香 红汤劲爽",
            price:"¥159.00"
        },
        {
            url:'https://yanxuan-item.nosdn.127.net/fcdcb840a0f5dd754bb8fd2157579012.jpg',
            name:"自煮火锅不排队 麦饭石不粘鸳鸯火锅",
            desc:"清汤鲜香 红汤劲爽",
            price:"¥159.00"
        },
        {
            url:'https://yanxuan-item.nosdn.127.net/fcdcb840a0f5dd754bb8fd2157579012.jpg',
            name:"自煮火锅不排队 麦饭石不粘鸳鸯火锅",
            desc:"清汤鲜香 红汤劲爽",
            price:"¥159.00"
        },
        {
            url:'https://yanxuan-item.nosdn.127.net/fcdcb840a0f5dd754bb8fd2157579012.jpg',
            name:"自煮火锅不排队 麦饭石不粘鸳鸯火锅",
            desc:"清汤鲜香 红汤劲爽",
            price:"¥159.00"
        },
    ])

</script>

<style lang="scss" scoped>

</style>