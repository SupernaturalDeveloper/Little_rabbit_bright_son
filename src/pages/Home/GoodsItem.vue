<template>
    <div class="goods-item-box" v-for="item in props.goods" :key="item.id">
        <div class="goods-item">
            <a href="" class="image">
                <img v-lazy="item.picture" alt="">
            </a>
            <p class="e-2 name">{{item.name}}</p>
            <p class="desc e">{{item.desc}}</p>
            <p class="price">{{item.price}}</p>
            <div class="extra">
                <span>找相似</span>
                <span>发现更多宝贝</span>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
    goods:Array<any>
})

</script>
<style lang="scss" scoped>
.goods-item-box {
    width: 200px;
    height: 300px;
    margin-right: 47.4px;
    margin-bottom: 10px;
    cursor: pointer;
    .goods-item {
        width: 200px;
        height: 300px;
        padding: 4px 16px;
        position: relative;
        overflow: hidden;
        border: 1px solid transparent;
        transition: all .5s;
        margin-left: 10px;
        .image {
            display: block;
            width: 160px;
            height: 160px;
            margin: 0 auto;

            img {
                width: 100%;
                height: 100%;
            }
        }

        p {
            margin-top: 6px;
            font-size: 16px;
        }

        p.name {
            height: 44px;
        }

        p.desc {
            color: #666;
            height: 22px;
        }

        p.price {
            margin-top: 10px;
            font-size: 20px;
            color: #cf4444;
        }

        .e-2 {
            word-break: break-all;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .e {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }


        .extra {
            position: absolute;
            left: 0;
            bottom: 0;
            height: 86px;
            width: 100%;
            background: #27ba9b;
            text-align: center;
            transform: translate3d(0, 100%, 0);
            transition: all .5s;

            :first-child {
                font-size: 18px;
                border-bottom: 1px solid #fff;
                line-height: 40px;
                margin-top: 5px;
            }

            span {
                display: block;
                color: #fff;
                width: 120px;
                margin: 0 auto;
                line-height: 30px;
            }
        }
    }

    :hover {
        border-color: #27ba9b;

    }

    :hover .extra {
        transform: none;
    }
}
</style>