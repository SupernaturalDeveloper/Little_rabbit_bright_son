<template>
    <!-- Order订单 -->
    <div class="order" v-for="item in (msg as any).items" :key="item.id">
        <div class="head">
            <p>
                <span>下单时间：{{item.createTime}}</span>
                <span>订单编号：{{item.id}}</span>
            </p>
            <div class="time" v-if="item.orderState==1">
                <img src="../../../assets/img/time.png" alt="">
                <span>付款截止：59分58秒</span>
            </div>
            <div class="del" v-else-if="item.orderState==6">删除</div>
        </div>
        <div class="box">
            <ul class="goods">
                <li v-for="item2 in item.skus" :key="item2.id">
                    <img :src="item2.image" alt="图片加载失败">
                    <div class="info">
                        <p>{{item2.name}}</p>
                        <div>{{item2.attrsText}}</div>
                    </div>
                    <div class="price">¥{{item2.realPay}}</div>
                    <div class="count">x{{item2.quantity}}</div>
                </li>
            </ul>
            <div class="state">
                <p>{{item.orderState==1?'待付款':item.orderState==2?'待发货':item.orderState==3?'待收货':item.orderState==4?'待评价':item.orderState==5?'已完成':item.orderState==6?'已取消':''}}</p>
                <p v-if="item.orderState==4" class="evaluate">评价商品</p>
            </div>
            <div class="amount">
                <p class="red">¥{{item.payMoney}}</p>
                <p>（含运费：¥{{item.postFee}}）</p>
                <p>{{item.payType==1?'在线支付':item.payType==2?'货到付款':''}}</p>
            </div>
            <div class="action">
                <!-- 待付款 -->
                <template v-if="item.orderState==1">
                    <button>立即付款</button>
                    <p>查看订单</p>
                    <p>取消订单</p>
                </template>
                <!-- 待发货 -->
                <template v-if="item.orderState==2">
                    <p>查看详情</p>
                    <p>再次购买</p>
                </template>
                <!-- 待评价 -->
                <template v-if="item.orderState==4">
                    <p>再次购买</p>
                    <p>查看详情</p>
                    <p>申请售后</p>
                </template>
                <!-- 已取消 -->
                <template v-if="item.orderState==6">
                    <p>查看详情</p>
                </template>
            </div>
        </div>
    </div>
    <div v-if="(msg as any).counts==0" class="noData">暂无数据</div>

    <!-- 取消订单 -->
    <!-- <div class="cancelOrder"></div> -->

</template>

<script setup lang="ts">
    import { useOrderStore } from '../../../store/order';
    import {computed,ref} from 'vue'
    // 数据
    let msg=computed(()=>{
        // console.log(useOrderStore().GETORDERLIST)
        return useOrderStore().GETORDERLIST
    })
    // 取消订单

</script>

<style lang="scss" scoped>
    .order{
        margin-bottom: 20px;
        border: 1px solid #f5f5f5;
        .head{
            height: 50px;
            line-height: 50px;
            background: #f5f5f5;
            padding: 0 20px;
            // overflow: hidden;
            display: flex;
            justify-content: space-between;
            p{
                span{
                    margin-right: 20px;
                }
            }
            .time{
                img{
                    width: 16px;
                    height: 16px;
                    margin-right: 3px;
                }
                span{
                    vertical-align: middle;
                    font-weight: 400;
                }
            }
            .del{
                color: #999;
            }
        }
        .box{
            display: flex;
            .goods{
                flex: 1;
                // padding: 20px 0;
                li{
                    border-bottom: 1px solid #f5f5f5;
                    padding: 10px;
                    display: flex;
                    img{
                        width: 70px;
                        height: 70px;
                        border: 1px solid #f5f5f5;
                        cursor: pointer;
                        // vertical-align: middle;
                    }
                    .info{
                        width: 220px;
                        padding: 0 10px;
                        box-sizing: border-box;
                        p{
                            height: 38px;
                            margin-bottom: 5px;
                        }
                        div{
                            color: #999;
                            font-size: 12px;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                        }
                    }
                    .price{
                        width: 100px;
                        text-align: center;
                    }
                    .count{
                        width: 80px;
                        text-align: center;
                    }
                }
                li:last-child{
                    border: none;
                }
            }
            &>div{
                border-left: 1px solid #f5f5f5;
                text-align: center;
                box-sizing: border-box;
                padding: 20px 0;
                p{
                    padding-top: 10px;
                }
            }
            .state{
                width: 120px;
                .evaluate{
                    color: #27ba9b;
                    cursor: pointer;
                }
            }
            .amount{
                width: 200px;
            }
            .action{
                width: 140px;
                button{
                    border-color: #27ba9b;
                    background: #27ba9b;
                    color: #fff;
                    width: 100px;
                    height: 32px;
                    font-size: 14px;
                    border-radius: 4px;
                    cursor: pointer;
                }
            }
            .red{
                color: #cf4444;;
            }
        }
    }
    .noData{
        height: 400px;
        text-align: center;
        line-height: 400px;
        color: #999;
    }
    // .cancelOrder{

    // }
</style>