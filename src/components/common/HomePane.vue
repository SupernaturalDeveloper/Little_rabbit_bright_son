<template>
    <!-- 这是我的收藏/足迹组件 -->
  <div class="box">
    <div class="head">
        <p class="title">{{props.title}}</p>
        <span>查看全部 &gt;</span>
    </div>
    <div class="list">
        <div v-for="(item,index) in props.msg" :key="index">
            <img alt="图片加载失败" :src="item.url">
            <p class="name ellipsis">{{item.name}}</p>
            <p class="text ellipsis">{{item.desc}}</p>
            <p class="price">{{item.price}}</p>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
    const props = defineProps(['title','msg'])
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 400px;
    padding: 0 20px;
    margin-top: 20px;
    box-sizing: border-box;
    background: #fff;
    .head{
        height: 66px;
        border-bottom: 1px solid #f5f5f5;
        padding: 18px 0;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        box-sizing: border-box;
        .title{
            font-size: 22px;
            font-weight: 400;
        }
        span{
            font-size: 16px;
            margin-right: 4px;
            color: #999;
        }
        span:hover{
            color: #5BB79C;
        }
    }
    .list{
        display: flex;
        justify-content: space-around;
        padding-top: 20px;
        &>div{
            width: 220px;
            padding: 20px 30px;
            text-align: center;
            transition: all .5s;
            box-sizing: border-box;
            cursor: pointer;
            img{
                width: 160px;
                height: 160px;
            }
            p{
                padding-top: 10px;
            }
            .name{
                font-size: 16px;
            }
            .text{
                color: #999;
                height: 29px
            }
            .ellipsis{
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .price{
                color: #cf4444;
                font-size: 20px;
            }
        }
        &>div:hover{
            transform: translate(0,-5px);
            box-shadow: 2px 2px 10px 2px #DADADA;
        }
    }
}
</style>