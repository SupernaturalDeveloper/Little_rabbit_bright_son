<template>
    <div class="pc-title">
        <div class="container">
            <div class="logo"><img src="../assets/img/logo.png" alt=""></div>
            <ul>
                <!-- <li class="home">首页</li>
                <li v-for="item, index in title_arr" :key="index">{{ item }}</li> -->
                <router-link to="/" tag="li">首页</router-link>
                <router-link to="/family" tag="li">居家</router-link>
                <router-link to="/foods" tag="li">食物</router-link>
                <router-link to="/motherhood" tag="li">母婴</router-link>
                <router-link to="/personalcare" tag="li">个护</router-link>
                <router-link to="/strictly" tag="li">严选</router-link>
                <router-link to="/digital" tag="li">数码</router-link>
                <router-link to="/motion" tag="li">运动</router-link>
                <router-link to="/groceries" tag="li">杂货</router-link>
            </ul>
            <div class="search">
                <i class="icon-search"></i>
                <input type="search" placeholder="搜一搜">
            </div>
            <div class="cart">
                <router-link to="/cart" class="curr">
                    <em>0</em>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.pc-title {
    width: 100%;
    background: #fff;

    .container {
        display: flex;
        align-items: center;
        width: 1240px;
        margin: 0 auto;
        position: relative;
        min-height: 132px;

        .logo {
            width: 220px;
            height: 100%;

            img {
                display: block;
                height: 100%;
                width: 100%;
            }
        }

        .cart {
            width: 50px;
            position: relative;
            z-index: 600;
            height: 32px;
            margin-left: 6px;

            .curr {
                height: 32px;
                line-height: 24px;
                width: 40px;
                text-align: center;
                position: relative;
                display: block;
                background: url('../assets/img/car.png') no-repeat 0 0;
                background-size: cover;

                em {
                    font-style: normal;
                    position: absolute;
                    right: 0;
                    top: 0;
                    padding: 1px 6px;
                    line-height: 1;
                    background: #e26237;
                    color: #fff;
                    font-size: 12px;
                    border-radius: 10px;
                    font-family: Arial;
                }
            }
        }

        .search {
            width: 170px;
            height: 32px;
            position: relative;
            border-bottom: 1px solid #e7e7e7;
            line-height: 32px;

            .icon-search {
                width: 20px;
                height: 20px;
                display: block;
                position: absolute;
                background: url('../assets/img/search.png') no-repeat 0 0;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                background-size: cover;
            }

            input {
                width: 140px;
                padding-left: 24px;
                color: #666;
            }
        }

        ul {
            width: 820px;
            display: flex;
            justify-content: space-around;
            padding-left: 40px;
            position: relative;

            li {
                margin-right: 40px;
                width: 38px;
                text-align: center;

            }
            a{
                color: #000;
            }

        }

    }
}
</style>