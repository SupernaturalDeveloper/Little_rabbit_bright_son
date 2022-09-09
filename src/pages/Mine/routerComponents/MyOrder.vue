<template>
    <!-- MyOrder我的订单 -->
    <el-tabs v-model="Index" type="border-card" @tab-click="handleClick">
        <el-tab-pane v-for="(item,index) in orderStatus.orderStatus" :key="index" :name="index" :label="item.label">
            <Order></Order>
        </el-tab-pane>
    </el-tabs>
</template>

<script setup lang="ts">
    import Order from "../components/Order.vue";// 引入组件
    import {ref} from 'vue';
    import orderStatus from '../../../api/const';
    import {useOrderStore} from '../../../store/order'
    import type { TabsPaneContext } from 'element-plus'
    let Index=ref(0)
    useOrderStore().getOrderList({page:1,pageSize:5,orderState:0});
    let handleClick=(tab: TabsPaneContext) => {
        useOrderStore().getOrderList({page:1,pageSize:5,orderState:(tab.props.name as number)});
    }
</script>

<style lang="scss" scoped>
    
</style>

<style lang="scss">
    .el-tabs--border-card>.el-tabs__header{
        background: #fff;
    }
    .el-tabs--border-card>.el-tabs__header .el-tabs__item{
        width: 110px;
        height: 60px;
        line-height: 60px;
        color: #333;
        text-align: center;
        font-size: 16px;
        border-right: 1px solid #f5f5f5;
        transition: none;
    }
    .el-tabs--border-card>.el-tabs__header .el-tabs__item:hover{
        color: #333 !important;;
    }
    .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
        color: #333;
        border-top: 2px solid #27ba9b;
        line-height: 56px;
    }
    .el-tabs--border-card>.el-tabs__content{
        padding: 20px;
    }
    .el-tabs--border-card{
        border: none;
    }
</style>