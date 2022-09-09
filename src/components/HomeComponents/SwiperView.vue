<template>
    <el-carousel height="500px">
        <el-carousel-item v-for="item in props.swiper" :key="item.id">
            <img :src="item?.imgUrl" alt="" />
        </el-carousel-item>
    </el-carousel>
</template>
<script lang="ts" setup>
import {defineProps} from 'vue'
const props = defineProps({
    swiper:{
        type:Array<any>,
        required:true,
        default:()=>[]
    }
})
</script>
<style lang="scss" scoped>
    .el-carousel__item h3 {
        display: flex;
        color: #475669;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
    }

    .el-carousel__button {
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
</style>