<template>
    <header>
        <div class="top">
            <el-row>
                <el-col :span="14"
                    ><div class="grid-content ep-bg-purple"
                /></el-col>
                <el-col :span="10">
                    <div class="grid-content ep-bg-purple-light">
                        <ul class="top-ul">
                            <template v-if="storage">
                                <li>{{ storage }}</li>
                                <li @click="logout">退出登录</li>
                            </template>
                            <template v-else>
                                <li @click="login">请先登录</li>
                                <li>免费注册</li>
                            </template>
                            <li v-show="flag">退出登录</li>
                            <li>我的订单</li>
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
    import { computed } from "vue";
    import { useRouter } from "vue-router";
    const router = useRouter();
    let flag = false;
    let storage = computed(() => {
        return window.localStorage.getItem("token");
    });
    // 退出登录
    const logout = () => {
        window.localStorage.removeItem("token");
    };
    // 登录
    const login = () => {
        router.push({
            path: "/login",
        });
    };
</script>
<style lang="scss" scoped>
    header {
        height: 54px;
        width: 100%;
        background-color: #333;
        line-height: 54px;
    }
    .top {
        width: 1240px;
        margin: 0 auto;
        color: #fff;
        .top-ul {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            li {
                padding: 0 10px;
                cursor: pointer;
            }
            li:hover {
                color: #27ba9b;
            }
        }
    }
</style>