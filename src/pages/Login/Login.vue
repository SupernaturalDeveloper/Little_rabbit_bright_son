<template>
    <div class="login">
        <div class="header">
            <router-link to=""
                ><img src="../../assets/img/logo.png" alt=""
            /></router-link>
            <h2>欢迎登录</h2>
            <router-link to="/"><p>进入网站首页</p> </router-link>
        </div>
        <div class="conter">
            <div class="wrap">
                <el-tabs type="card" class="demo-tabs" v-model="activeName">
                    <el-tab-pane label="账户登录" name="first">
                        <p>使用短信登录</p>
                        <el-input
                            :model-value="userInfo.account"
                            placeholder="用户名"
                        />
                        <el-input
                            :model-value="userInfo.password"
                            type="password"
                            placeholder="密码"
                        />
                        <div class="ml-4">
                            <div>
                                <input type="checkbox" v-model="checked" />
                                <span>我已同意</span>
                                <a>《隐私条款》</a>
                                <span>和</span>
                                <a>《服务条款》</a>
                            </div>
                            <div class="alertTitle" v-show="isShowTitle">
                                <el-icon><WarnTriangleFilled /></el-icon>
                                <span> 请勾选登录协议 </span>
                            </div>
                        </div>
                        <el-button type="primary" @click="loginHandle"
                            >登录</el-button
                        >
                        <div class="dd">
                            <a>忘记密码</a>
                            <a>免费注册</a>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="扫码登录" name="second"
                        >Config</el-tab-pane
                    >
                </el-tabs>
            </div>
        </div>
        <div class="bottom">
            <p>
                <span>关于我们</span>
                <span>帮助中心</span>
                <span>售后服务</span>
                <span>配送与验收</span>
                <span>商务合作</span>
                <span>搜索推荐</span>
                <span class="spa">友情链接</span>
            </p>
            <div class="bot-p">CopyRight © 小兔鲜儿</div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, watchEffect } from "vue";
    import { useRouter } from "vue-router";
    import { useLoginStore } from "../../store/login";
    let checked = ref(true);
    let isShowTitle = ref(false);
    const router = useRouter();
    const store = useLoginStore();
    // 用户名和密码
    const userInfo = ref({
        account: "xiaotuxian001",
        password: "123456",
    });
    const activeName = ref("first");
    // 登录操作
    const loginHandle = () => {
        if (!checked.value) return;
        store.accountLogin(userInfo.value);
    };
    watchEffect(() => {
        if (!checked.value) {
            isShowTitle.value = true;
        } else {
            isShowTitle.value = false;
        }
        if (store.getToken) {
            router.push({
                path: store.$state.userInfo.redirectUrl,
            });
        }
    });
</script>

<style lang="scss" scoped>
    a {
        text-decoration: none;
    }
    .header {
        width: 1240px;
        height: 133px;
        background: #fff;
        margin: 0 auto;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        border-bottom: 1px solid #e4e4e4;

        img {
            width: 200px;
            margin-bottom: 30px;
        }
        h2 {
            flex: 1;
            font-size: 24px;
            font-weight: 400;
            margin-bottom: 38px;
            margin-left: 20px;
            color: #666;
        }
        p {
            width: 120px;
            margin-bottom: 38px;
            font-size: 16px;
        }
    }
    .conter {
        height: 488px;
        background: url(../../assets/img/login-bg.png) no-repeat 50% / cover;
        position: relative;
        .wrap {
            width: 380px;
            background: #fff;
            min-height: 400px;
            position: absolute;
            left: 50%;
            top: 54px;
            transform: translate3d(100px, 0, 0);
            box-shadow: 0 0 10px rgb(0 0 0 / 15%);
            p {
                font-size: 14px;
                margin-left: 250px;
            }
            .el-input {
                width: 300px;
                height: 36px;
                margin-left: 30px;
                margin-top: 20px;
            }
            .el-radio-group {
                margin: 20px 0 0 30px;
            }
            .el-button {
                width: 300px;
                font-size: 18px;
                margin-left: 30px;
                margin-top: 20px;
            }
            .dd {
                margin-left: 200px;
                margin-top: 30px;
            }
            .dd a {
                color: #999;
                margin-left: 10px;
            }
        }
    }
    .bottom {
        width: 1240px;
        margin: 0 auto;
        position: relative;
        p {
            text-align: center;
            color: #999;
            padding-top: 80px;
            span {
                line-height: 1;
                padding: 0 10px;
                color: #999;
                display: inline-block;
                border-right: 1px solid #999;
            }
            .spa {
                border-right: none;
            }
        }
        .bot-p {
            text-align: center;
            color: #999;
            padding-top: 20px;
        }
    }
    .ml-4 {
        padding: 35px 0 0 32px;
        height: 30px;
        input {
            vertical-align: top;
            margin-right: 4px;
        }
        div.alertTitle {
            margin-top: 10px;
            text-align: left;
            color: red;
            span {
                display: inline-block;
                vertical-align: top;
            }
        }
    }
</style>