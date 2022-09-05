<template>
    <div class="pc-title">
        <div class="container">
            <div class="logo">
                <img src="../../assets/img/logo.png" alt="" />
            </div>
            <ul>
                <li class="home">首页</li>
                <li v-for="(item, index) in title_arr" :key="index">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
    import constData from "../../api/const/index";

    const title_arr = constData.topCategory;
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

            .logo {
                width: 220px;

                img {
                    display: block;
                    height: 100%;
                    width: 100%;
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
            }
        }
    }
</style>