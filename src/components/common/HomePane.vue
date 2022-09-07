// 这是我的收藏组件
<template>
  <div class="box">
    <div class="head">
        <p class="title">我的收藏</p>
    </div>
    <div class="list">
        <a href="" v-for="(item,index) in obj" :key="index">
            <img alt="" data-v-3828c3be="" :src="item.url">
            <p class="name ellipsis" data-v-3828c3be="">{{item.name}}</p>
            <p class="desc ellipsis" data-v-3828c3be="">{{item.desc}}</p>
            <p class="price" data-v-3828c3be="">{{item.price}}</p>
        </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "@vue/reactivity";
    let obj = reactive([
        {
            url:'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_3.jpg',
            name:"1什局安这书无列候们养更算约",
            desc:"a来问非响身整规音价家",
            price:"¥129.01"
        },
        {
            url:'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_3.jpg',
            name:"2什局安这书无列候们养更算约",
            desc:"b来问非响身整规音价家",
            price:"¥129.01"
        },
        {
            url:'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_3.jpg',
            name:"3什局安这书无列候们养更算约",
            desc:"c来问非响身整规音价家",
            price:"¥129.01"
        },
        {
            url:'http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_3.jpg',
            name:"4什局安这书无列候们养更算约",
            desc:"d来问非响身整规音价家",
            price:"¥129.01"
        },
    ])
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
    color: #333;
    outline: none;
}
.box{
    width: 1000px;
    height: 400px;
    padding: 20px 20px 0 20px;
    margin-top: 20px;
    background: rgb(217, 173, 173);
    margin: 0 auto;
    .head{
        height: 29px;
        border-bottom:1px solid #f5f5f5;
        padding: 18px 0;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        .title{
            font-size: 22px;
            font-weight: 400;
        }
    }
    .list{
        display: flex;
        justify-content: space-around;
        padding-top: 20px;
        a{
            display: block;
            width: 160px;
            padding: 20px 27px;
            text-align: center;
            transition: all .5s;
            img{
                width: 160px;
                height: 160px;
            }
            .ellipsis{
                font-size: 16px;
                padding-top:10px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .desc{
                color: #999;
                height: 29px;
                font-size: 14px;
            }
            .price{
                color: #cf4444;
                font-size: 20px;
            }
        }
    }
}
</style>