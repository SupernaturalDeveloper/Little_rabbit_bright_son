<template>
    <header>
        <div class="top">
            <el-row>
                <el-col :span="14"><div class="grid-content ep-bg-purple"/></el-col>
                <el-col :span="10">
                    <div class="grid-content ep-bg-purple-light">
                       <ul class="top-ul">
                        <li><router-link to="/mine/PersonalCenter">用户</router-link></li>
                        <li v-show="flag">退出登录</li>
                        <li><router-link to="/mine/MyOrder">我的订单</router-link></li>
                        <li>会员中心</li>
                        <li>关于我们</li>
                        <li>手机版</li>
                       </ul>

                    </div>
                </el-col>
            </el-row>
        </div>
    </header>
</template>
<script lang="ts" setup>
let flag = false

</script>
<style lang="scss" scoped>
header{
    height: 54px;
    width: 100%;
    background-color: #333;
    line-height: 54px;
}
.top{
    width: 1240px;
    margin: 0 auto;
    color: #fff;
    .top-ul{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        li{
            padding: 0 10px;
            cursor: pointer;
            a{color: #fff;}
        }
        li:hover{
            color: #27ba9b;
        }
    }
}

</style>