<template>
    <div class="action">
        <div class="action-left">
            <Checkbox checkboxName="checkboxAction"></Checkbox>
            <ModalButton
                title="删除商品"
                text="亲，您是否确认删除选中的商品！"
                @confirm="confirmDel"
            ></ModalButton>
            <ModalButton title="移入收藏夹"></ModalButton>
            <ModalButton
                title="清空失效商品"
                text="亲，您是否确认删除失效的商品!"
                @confirm="confirmClear"
            ></ModalButton>
        </div>
        <div class="action-right">
            共 {{ store.getCounter }} 件商品，已选择
            {{ store.getSelectedCounter }} 件，商品合计：
            <span class="price">￥{{ store.getReducePrice }}</span>
            <el-button color="#626aef">下单结算</el-button>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { useCartStore } from "../../store";
    // 购物车store
    const store = useCartStore();
    // 删除选中商品
    const confirmDel = (val: boolean) => {
        store.deleteCartItem({ ids: store.ShoppingCartIds });
    };
    // 清空失效商品
    const confirmClear = (val: boolean) => {
        console.log(val);
    };
</script>
<style lang="scss" scoped>
    .action {
        display: flex;
        background: rgb(255, 255, 255);
        margin-top: 20px;
        height: 80px;
        align-items: center;
        font-size: 16px;
        justify-content: space-between;
        padding: 0px 30px;
        .action-left {
            display: flex;
            align-items: center;
            margin-right: 10px;
        }
        .action-right {
            span {
                color: #cf4444;
                font-size: 18px;
                margin-right: 20px;
                font-weight: 700;
            }
            .el-button {
                width: 180px;
                height: 50px;
                font-size: 16px;
            }
        }
    }
</style>