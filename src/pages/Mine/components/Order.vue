<template>
    <!-- Order订单 -->
    <div class="order">
        <div class="head">
            <p>
                <span>下单时间：2022-09-02 09:54:38</span>
                <span>订单编号：1565518530648051713</span>
            </p>
            <slot name="head-right"></slot>
        </div>
        <div class="box">
            <ul class="goods">
                <li>
                    <img src="https://yanxuan-item.nosdn.127.net/40bcee837dbd99e810f93791f0b77786.png" alt="">
                    <div class="info">
                        <p>品茗不湿桌面竹制干泡茶盘</p>
                        <div>规格:长方形茶盘（37.8*14.8*3.5cm） </div>
                    </div>
                    <div class="price">¥99</div>
                    <div class="count">x1</div>
                </li>
                <li>
                    <img src="https://yanxuan-item.nosdn.127.net/40bcee837dbd99e810f93791f0b77786.png" alt="">
                    <div class="info">
                        <p>品茗不湿桌面竹制干泡茶盘</p>
                        <div>规格:长方形茶盘（37.8*14.8*3.5cm） </div>
                    </div>
                    <div class="price">¥99</div>
                    <div class="count">x1</div>
                </li>
            </ul>
            <div class="state">
                <p>待付款</p>
                <!-- <p><slot name="state"></slot></p> -->
            </div>
            <div class="amount">
                <p class="red">¥104</p>
                <p>（含运费：¥5）</p>
                <p>在线支付</p>
            </div>
            <div class="action">
                <slot name="action"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    
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
            }
            .amount{
                width: 200px;
            }
            .action{
                width: 140px;
            }
            .red{
                color: #cf4444;;
            }
        }
    }
</style>