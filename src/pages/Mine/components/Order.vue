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
            <div class="del" v-else-if="item.orderState==6" @click="delData(item.id)">删除</div>
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
                    <p @click="cancelOrderVisible(item.id)">取消订单</p>
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
    <div v-if="cancelOrder" class="cancelOrder">
        <div class="cancelOrderBox">
            <div class="header">
                <h3>取消订单</h3>
                <div @click="cancelOrderVisible(undefined)">×</div>
            </div>
            <div class="body">
                <p>取消订单后，本单享有的优惠可能会一并取消，是否继续？</p>
                <p class="colorP">请选择取消订单的原因（必选）：</p>
                <div>
                    <div v-for="(item,index) in constData.cancelReason" :class="{active:act==index}" :key="index" @click="active(index,item)">
                        {{item}}
                    </div>
                </div>
            </div>
            <div class="footer">
                <button @click="cancelOrderVisible(undefined)" class="cancel">取消</button>
                <button @click="affirm" class="affirm">确认</button>
            </div>
        </div>
    </div>
    <!-- 删除 -->
    <el-dialog v-model="del" title="温馨提示" width="400px">
        <div>亲，您确认删除该订单吗？</div>
        <template #footer>
            <div class="dialog-footer">
                <el-button class="cancel" @click="del=false">取消</el-button>
                <el-button class="affirm" @click="delFn">确认</el-button>
            </div>
        </template>
    </el-dialog>

</template>

<script setup lang="ts">
    import { useOrderStore } from '../../../store/order';
    import {computed,ref,watchEffect} from 'vue'
    import constData from '../../../api/const'
    import { ElMessage } from 'element-plus'
    import {putCancelOrder,deleteOrder} from '../../../api/order'
    // 数据
    let msg=computed(()=>{
        // console.log(useOrderStore().GETORDERLIST)
        return useOrderStore().GETORDERLIST
    })
    // 取消订单
    let cancelOrder=ref(false)// 判断是否可见
    let act=ref(-1)// 判断取消原因选择
    let orderId=ref('')// 要取消订单的id
    let cancelReason=ref('')//取消原因
    function cancelOrderVisible(id:any){// 取消订单弹框是否可见
        act.value=-1
        cancelOrder.value=!cancelOrder.value
        orderId.value=id
    }
    function active(i:any,item:any){// 取消原因选中
        act.value=i
        cancelReason.value=item
    }
    function affirm(){// 确认按钮
        if(act.value==-1){
            ElMessage({
                message: '亲，请选择取消原因',
                type: 'warning',
            })
        }else{
            // console.log('id：',orderId.value,'取消原因：',cancelReason.value);
            putCancelOrder({cancelReason:cancelReason.value,orderId:orderId.value}).then((res:any)=>{
                // console.log(res);
                useOrderStore().getOrderList({page:1,pageSize:5,orderState:1});
            },(err:any)=>{
                console.log(err);
            })
            ElMessage({
                message: '取消订单成功',
                type: 'success',
            })
            
            cancelOrderVisible(undefined)
        }
    }
    // 删除按钮
    const del = ref(false)
    let delId=ref('')// 要删除的id
    let delData=(id:any)=>{// 要删除的数据
        delId.value=id;
        del.value=true
    }
    let delFn=()=>{
        ElMessage({
            message: '删除成功',
            type: 'success',
        })
        deleteOrder({id:delId.value}).then((res:any)=>{
            useOrderStore().getOrderList({page:1,pageSize:5,orderState:6});
            // console.log(res);
        },(err:any)=>{
            console.log(err);
        })

        del.value=false
    }
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
                    
                }
                p{
                    cursor: pointer;
                }
                p:hover{
                    color: #5BBEA9;
                }
            }
            .red{
                color: #cf4444;;
            }
        }
    }
    .noData{
        height: 1052px;
        text-align: center;
        line-height: 400px;
        color: #999;
    }
    .cancelOrder{
        transition: all .4s;
        background: rgba(0,0,0,.5);
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        .cancelOrderBox{
            width: 620px;
            background: #fff;
            border-radius: 4px;
            position: absolute;
            top: 50%;
            left: 50%;
            transition: all .4s;
            transform: translate(-50%,-50%);
            opacity: 1;
            .header{
                height: 70px;
                line-height: 70px;
                padding: 0 20px;
                border-bottom: 1px solid #f5f5f5;
                position: relative;
                h3{
                    font-weight: 400;
                    font-size: 18px;
                }
                div{
                    position: absolute;
                    right: 25px;
                    top: 25px;
                    font-size: 24px;
                    width: 20px;
                    height: 20px;
                    line-height: 20px;
                    text-align: center;
                    color: #999;
                    cursor: pointer;
                }
                div:hover{
                    color: #AAAAAA;
                }
            }
            .body{
                padding: 20px 40px;
                font-size: 16px;
                p{
                    font-size: 16px;
                    line-height: 35px;
                }
                .colorP{
                    color: #999;
                }
                &>div{
                    padding-top: 21px;
                    display: flex;
                    flex-wrap: wrap;
                    div{
                        width: 248px;
                        height: 45px;
                        line-height: 45px;
                        text-align: center;
                        background-color: #fff;
                        border: 1px solid #e4e4e4;
                        margin-right: 20px;
                        margin-bottom: 20px;
                        color: #666;
                        cursor: pointer;
                    }
                    div:hover,.active{
                        background-color: #e3f9f4;
                        border-color: #27ba9b;
                    }
                }
            }
            .footer{
                text-align: center;
                padding: 10px 0 30px 0;
                button{
                    color: #fff;
                    width: 180px;
                    height: 50px;
                    font-size: 16px;
                    cursor: pointer;
                }
                .cancel{
                    margin-right: 20px;
                }
            }
        }
    }
    .cancel{
        border-color: #ccc;
        background: #ccc;
    }
    .affirm{
        border-color: #27ba9b;
        background: #27ba9b;
    }
    .dialog-footer{
        button{
            color: #fff;
        }
    }
</style>