//轮播组件
<template>
    <div class="carousel-view">
      <p class="title">猜你喜欢</p>
      <div>
      <el-carousel height="320px" indicator-position="outside">
        <el-carousel-item v-for="item in arr" :key="item.id">
          <div class="slide">
            <a href="" v-for="(it,index) in item.obj" :key="index">
                <img :src="it.url" alt="">
                <p class="name ellipsis" data-v-17b46ea2="">{{it.name}}</p>
                <p class="price" data-v-17b46ea2="">{{it.price}}</p>
            </a>
          </div>
        </el-carousel-item>
      </el-carousel>
      </div>  
  </div>
    
  </template>
  
  <script setup lang="ts">
    import { reactive } from "@vue/reactivity";

    let arr=reactive([
        {
            id:0,
            obj:[
                {
                    url:"https://yanxuan-item.nosdn.127.net/4737115ab947865c148955a3c20cb4b4.png",
                    name:"温柔拥抱新生，萌趣全棉哈衣爬服0-3岁",
                    price:"¥89.00"
                },
                {
                    url:"https://yanxuan-item.nosdn.127.net/4b515f173e3e2a9b8ba5a6b41e6d2566.png",
                    name:"温柔拥抱新生，萌趣全棉哈衣爬服0-3岁",
                    price:"¥89.00"
                },
                {
                    url:"https://yanxuan-item.nosdn.127.net/c3b4e3640f77bb72ec4d043ef2e2a0cd.png",
                    name:"温柔拥抱新生，萌趣全棉哈衣爬服0-3岁",
                    price:"¥89.00"
                },
                {
                    url:"https://yanxuan-item.nosdn.127.net/e13249bcbf667bb7779738b9869bb343.jpg",
                    name:"温柔拥抱新生，萌趣全棉哈衣爬服0-3岁",
                    price:"¥89.00"
                }
            ]
        },
        {
            id:1,
            obj:[
                {
                    url:"https://yanxuan-item.nosdn.127.net/50db51cb0a25b0d346ce62b22b5e0f92.png",
                    name:"温柔拥抱新生，萌趣全棉哈衣爬服0-3岁",
                    price:"¥89.00"
                },
                {
                    url:"https://yanxuan-item.nosdn.127.net/55176dfd19ad8dfae618959d18d7c481.png",
                    name:"温柔拥抱新生，萌趣全棉哈衣爬服0-3岁",
                    price:"¥89.00"
                },
                {
                    url:"https://yanxuan-item.nosdn.127.net/7f4d7114f16d2996b31382dbf018b0a0.png",
                    name:"温柔拥抱新生，萌趣全棉哈衣爬服0-3岁",
                    price:"¥89.00"
                },
                {
                    url:"https://yanxuan-item.nosdn.127.net/4d7a2b8570ed699755c4121e410575d4.png",
                    name:"温柔拥抱新生，萌趣全棉哈衣爬服0-3岁",
                    price:"¥89.00"
                }
            ]
        }
    ])
  </script>
  
  <style lang="scss" scoped>
    *,p{
        margin: 0;
        padding: 0;
    }
      .demonstration {
          color: var(--el-text-color-secondary);
      }
      .carousel-view{
          width: 1000px;
          background: #fff;
          border: 1px solid red;
          margin: 0 auto;
          .title{
            height: 80px;
            line-height: 80px;
            font-size: 20px;
            padding-left: 10px;
          }
          .el-carousel{
            .slide{
                display: flex;
                justify-content: space-around;
                a{
                    width: 240px;
                    text-align: center;
                    text-decoration: none;
                    color: #333;
                    outline: none;
                    img{
                        width: 230px!important;
                        height: 230px!important;
                    }
                    .ellipsis{
                        font-size: 16px;
                        color: #666;
                        padding: 0 40px;
                        margin-top: 20px;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden
                    }
                    .price{
                        font-size: 16px;
                        color: #cf4444;
                        margin-top: 15px;
                    }
                }
            }
          }
      }
      
  </style>