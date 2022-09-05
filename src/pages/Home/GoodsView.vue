<template>
    <div class="goods-list">
        <div class="goods-children" v-for="item in goods_list" :key="item.id">
            <header>
                <h3>
                    {{ item.name }}
                </h3>
                <div class="sub">
                    <span v-for="sub in item.children" :key="sub.id">{{ sub.name }}</span>
                </div>
                <el-button plain size="small">查看全部</el-button>
            </header>
            <div class="box">
                <a href="" class="cover">
                    <img :src="item.picture" alt="">
                    <strong><span>{{ item.saleInfo }}</span></strong>
                </a>
                <div class="shop-list">
                    <GoodsItem :goods='item.goods' />
                </div>

            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import GoodsItem from './GoodsItem.vue';
import { getFindGoods } from '../../api/home/index';
import { watchEffect, reactive } from 'vue';
const goods_list = reactive<Array<any>>([])
watchEffect(async () => {
    const res = await getFindGoods()
    goods_list.push(...res.result)
    console.log(res);
})

</script>
<style lang="scss" scoped>
.goods-list {
    width: 1240px;
    margin: 0 auto;

    .goods-children {
        header {
            padding: 40px 0;
            display: flex;
            align-items: flex-end;

            h3 {
                flex: 1;
                font-size: 32px;
                font-weight: 400;
                margin-left: 6px;
                height: 35px;
                line-height: 35px;
            }

            .sub,
            .el-button {
                margin-bottom: 2px;
            }

            .el-button {
                text-align: center;
            }

            span {
                padding: 2px 12px;
                font-size: 16px;
                border-radius: 4px;
                cursor: pointer;
            }

            span:last-child {
                margin-right: 80px;
            }

            span:hover {
                background: #27ba9b;
                color: #fff;
            }
        }

        .box {
            display: flex;

            .cover {
                width: 240px;
                height: 610px;
                margin-right: 10px;
                position: relative;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                strong {
                    width: 188px;
                    height: 66px;
                    display: flex;
                    font-size: 18px;
                    color: #fff;
                    line-height: 66px;
                    font-weight: 400;
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translate3d(0, -50%, 0);

                    span {
                        width: 120px;
                        background: rgba(0, 0, 0, .9);
                    }
                }
            }
        }

        .shop-list {
            width: 990px;
            display: flex;
            flex-wrap: wrap;
        }
    }

}
</style>