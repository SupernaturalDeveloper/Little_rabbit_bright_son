<template>
    <div class="goods" v-for="e,index in props.list" :key="index">
        <header>
            <h3>{{e.name}}</h3>
            <p class="subtitle">副标题</p>
            <span>查看全部</span>
        </header>

        <div class="goods-list">
            <CategoryItem :ItemList='e.goods'/>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {defineProps } from 'vue';
const props = defineProps({
    list:Array<any>
})

</script>

<style lang="scss" scoped>
.goods {
    width: 100%;
    background-color: #fff;
    margin-top: 20px;
    position: relative;
    header {
        h3 {
            font-size: 28px;
            color: #666;
            font-weight: 400;
            text-align: center;
            line-height: 100px;
        }

        .subtitle {
            text-align: center;
            color: #999;
            font-size: 20px;
            position: relative;
            top: -20px;
        }

        span {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 16px;
            vertical-align: middle;
            margin-right: 4px;
            color: #999;
        }
    }

    .goods-list {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 0 65px 30px;
    }
}
</style>