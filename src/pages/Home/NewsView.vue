<template>
    <div class="newshop">
        <header>
            <h3>新鲜好物
                <small>新鲜出炉 品质靠谱</small>
            </h3>
            <span>查看全部</span>
        </header>
        <ul class="list">
            <li v-for="item in list1" :key="item.id">
                <img v-lazy="item.picture" alt="">
                <div>
                    <p class="ellipsis">{{ item.name }}</p>
                    <p class="price">￥：{{ item.price }}</p>
                </div>
            </li>

        </ul>
    </div>
</template>
<script lang="ts" setup>
import { getFindNew } from '../../api/home/index'
import { watchEffect, reactive } from 'vue';

const list1 = reactive<Array<any>>([])
watchEffect(async () => {
    let res1 = await getFindNew()
    list1.push(...res1.result)
})

</script>
<style scoped lang="scss">
.newshop {
    width: 1240px;
    margin: 0 auto;
    position: relative;

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

            span {
                font-size: 16px;
                vertical-align: middle;
                margin-right: 4px;
                color: #999;
            }

            small {
                font-size: 16px;
                color: #999;
                margin-left: 20px;
            }
        }
    }

    .list {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;

        li {
            width: 25%;
            height: 406px;
            background: #f0f9f4;
            transition: all .5s;

            img {
                width: 306px;
                height: 306px;
            }

            div {
                background-color: rgb(240, 249, 244);
                padding: 10px auto 10px;

                p {
                    font-size: 22px;
                    padding: 12px 30px 0 30px;
                    text-align: center;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }

                .price {
                    color: #cf4444;
                    margin: 4px auto;
                }
            }
        }

        li:hover {
            transform: translate3d(0, -3px, 0);
            box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        }
    }
}
</style>