<template>
    <!-- PersonalCenterOverview个人中心概述 -->
    <div class="PersonalCenterOverview">
        <div class="l">
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.pp-sp.com%2FUploadFiles%2Fimg_2_188149577_2949073731_26.jpg&refer=http%3A%2F%2Fwww.pp-sp.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664682020&t=439ea8f4d615cd64a3883603df5a3b50" alt="图片加载失败">
            <h4>Did</h4>
        </div>
        <div class="r">
            <div><img src="../../../assets/img/vip.png" alt="图片加载失败">会员中心</div>
            <div><img src="../../../assets/img/set.png" alt="图片加载失败">安全设置</div>
            <div><img src="../../../assets/img/address.png" alt="图片加载失败">地址管理</div>
        </div>
    </div>
</template>

<script setup lang="ts">
    
</script>

<style lang="scss" scoped>
    .PersonalCenterOverview{
        height: 132px;
        background: url(http://erabbit.itheima.net/img/center-bg.31e0daef.png) no-repeat 50%/ cover;
        display: flex;
        &>div{
            flex: 1;
            display: flex;
            align-items: center;
        }
        .l{
            img{
                width: 85px;
                height: 85px;
                border-radius: 50%;
                margin-left: 60px;
            }
            h4{
                padding-left: 26px;
                font-size: 18px;
                font-weight: 400;
                color: #fff;
            }
        }
        .r{
            justify-content: space-around;
            img{
                width: 32px;
                height: 32px;
                display: block;
                margin: 0 auto;
            }
            div{
                color: #fff;
                font-size: 16px;
                cursor:pointer;
                line-height: 32px;
            }
        }
    }
</style>