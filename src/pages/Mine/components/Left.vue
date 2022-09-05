<template>
    <!-- mine我的-左侧区域 -->
    <div class="Left">
        <h4>我的账户</h4>
        <div>
            <router-link to="/mine/PersonalCenter">
                <p :class="{active:$route.path=='/mine/PersonalCenter'}">个人中心</p>
            </router-link>
            <p>消息通知</p>
            <p>个人信息</p>
            <p>安全设置</p>
            <p>地址管理</p>
            <p>我的积分</p>
            <p>我的足迹</p>
            <p>邀请有礼</p>
            <p>幸运抽奖</p>
        </div>
        <h4>交易管理</h4>
        <div>
            <router-link to="/mine/MyOrder">
                <p :class="{active:$route.path=='/mine/MyOrder'}">我的订单</p>
            </router-link>
            <p>优惠券</p>
            <p>礼品卡</p>
            <p>评价晒单</p>
            <p>售后服务</p>
        </div>
        <h4>我的收藏</h4>
        <div>
            <p>收藏的商品</p>
            <p>收藏的专题</p>
            <p>关注的品牌</p>
        </div>
        <h4>帮助中心</h4>
        <div>
            <p>帮助中心</p>
            <p>在线客服</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    
</script>

<style lang="scss" scoped>
    .Left{
        width: 220px;
        margin-right: 20px;
        background: #fff;
        h4{
            font-size: 18px;
            font-weight: 400;
            padding: 20px 52px 5px;
            border-top: 1px solid #f6f6f6;
        }
        &>div{
            padding: 0 52px 10px;
            p{
                line-height: 1;
                padding: 15px 0;
                font-size: 14px;
                color: #666;
                position: relative;
            }
            p:hover{
                color: #27ba9b;
            }
            .active{
                color: #27ba9b;
            }
            .active:before{
                content: "";
                width: 6px;
                height: 6px;
                border-radius: 50%;
                position: absolute;
                top: 19px;
                left: -16px;
                background-color: #27ba9b;
            }
        }
    }
</style>