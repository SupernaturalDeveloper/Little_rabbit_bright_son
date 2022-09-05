<template>
    <!-- MyOrder我的订单 -->
    <el-tabs type="border-card">
        <!-- <el-tab-pane :label="item.label" v-for="(item,index) in MyOrder" :key="index">
            {{item.name}}
        </el-tab-pane> -->
        <el-tab-pane label="全部订单">
            全部订单
        </el-tab-pane>
        <el-tab-pane label="待付款">
            <Order>
                <template v-slot:head-right>
                    <div class="head-right">
                        <img src="../../../assets/img/time.png" alt="">
                        <span>付款截止：59分58秒</span>
                    </div>
                </template>
                <template v-slot:action>
                    <button class="btn">立即付款</button>
                    <p class="p">查看订单</p>
                    <p class="p">取消订单</p>
                </template>
            </Order>

            <Order>
                <template v-slot:head-right>
                    <div class="head-right">
                        <img src="../../../assets/img/time.png" alt="">
                        <span>付款截止：59分58秒</span>
                    </div>
                </template>
                <template v-slot:action>
                    <button class="btn">立即付款</button>
                    <p class="p">查看订单</p>
                    <p class="p">取消订单</p>
                </template>
            </Order>
        </el-tab-pane>
        <el-tab-pane label="待发货">
            <Order>
                <template v-slot:action>
                    <p class="p">查看详情</p>
                    <p class="p">再次购买</p>
                </template>
            </Order>

            <Order>
                <template v-slot:action>
                    <p class="p">查看详情</p>
                    <p class="p">再次购买</p>
                </template>
            </Order>
        </el-tab-pane>
        <el-tab-pane label="待收货"><div class="noData">暂无数据</div></el-tab-pane>
        <el-tab-pane label="待评价">
            <Order>
                <template v-slot:action>
                    <p class="p">查看详情</p>
                    <p class="p">再次购买</p>
                    <p class="p">申请售后</p>
                </template>
            </Order>
        </el-tab-pane>
        <el-tab-pane label="已完成"><div class="noData">暂无数据</div></el-tab-pane>
        <el-tab-pane label="已取消">
            <Order>
                <template v-slot:head-right>
                    <span class="del">删除</span>
                </template>
                <template v-slot:action>
                    <p class="p">查看详情</p>
                </template>
            </Order>
        </el-tab-pane>
    </el-tabs>
</template>

<script setup lang="ts">
    // 引入组件
    import Order from "../components/Order.vue";
    // 引入订单状态(待发货待收货...)
    import constData from '../../../api/const/index'
    // 引入订单相关数据
    import {getFindOrderList} from '../../../api/order/index'

    // const MyOrder=constData.orderStatus
    // console.log(constData.orderStatus);

    // getFindOrderList({page:1,pageSize:10,orderState:1}).then((res:any)=>{
    //     console.log('res:',res);
    // },(err:any)=>{
    //     console.log('err:',err);
    // })
    

</script>

<style lang="scss" scoped>
    .head-right{
        img{
            width: 16px;
            height: 16px;
            margin-right: 3px;
        }
        span{
            vertical-align: middle;
            font-weight: 400;
        }
    }
    .btn{
        border-color: #27ba9b;
        background: #27ba9b;
        color: #fff;
        width: 100px;
        height: 32px;
        font-size: 14px;
        border-radius: 4px;
        cursor: pointer;
    }
    .p{
        padding-top: 10px;
    }
    .del{
        color: #999;
    }

    .noData{
        height: 400px;
        text-align: center;
        line-height: 400px;
        color: #999;
    }
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