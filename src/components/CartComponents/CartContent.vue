<template>
    <div class="cartContent">
        <table class="cartTable">
            <thead>
                <tr>
                    <th width="120">
                        <Checkbox checkboxName="checkboxContent"></Checkbox>
                    </th>
                    <th width="400">商品信息</th>
                    <th width="220">单价</th>
                    <th width="180">数量</th>
                    <th width="180">小计</th>
                    <th width="140">操作</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="shopData['length']">
                    <CartItem
                        v-for="item in shopData"
                        :itemMessage="(item as any)"
                        :key="Math.random"
                    ></CartItem>
                </template>
                <template v-else>
                    <tr>
                        <td colspan="6">
                            <div class="cart-none">
                                <img
                                    src="../../assets/img/cart-none.png"
                                    alt=""
                                />
                                <p style="margin: 10px 0">
                                    购物车内暂时没有商品
                                </p>
                                <el-button color="#626aef" @click="toHome"
                                    >继续逛逛</el-button
                                >
                            </div>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>
<script setup lang="ts">
    import { useCartStore, useCartItemKind } from "../../store";
    import { useLoginStore } from "../../store/login";
    import { computed, watchEffect } from "vue";
    import { useRouter } from "vue-router";
    // 购物车store
    const store = useCartStore();
    const loginStore = useLoginStore();
    const kindStore = useCartItemKind();
    const router = useRouter();

    let shopData = computed(() => {
        return store.getShoppingCartData;
    });
    watchEffect(() => {
        if (loginStore.getToken) {
            store.getCartData();
        }
    });

    document.addEventListener("click", function (e) {
        kindStore.goodsKinds
            .filter(item => {
                if ((item["value"] as any).contains(e.target)) {
                    (item["value"] as any).children[1].style.display = "block";
                }
                return !(item["value"] as any).contains(e.target);
            })
            .forEach(
                item => ((item["value"] as any).children[1].style.display = "none")
            );
    });
    // 继续逛逛
    const toHome = () => {
        router.push({
            path: "/",
        });
    };
</script>
<style lang="scss" scoped>
    .cartContent {
        background: #fff;
        .cartTable {
            border-spacing: 0;
            border-collapse: collapse;
            line-height: 24px;
            color: #999;
            tr {
                border-top: 1px solid #f5f5f5;
            }
            th {
                font-size: 16px;
                font-weight: 400;
                line-height: 50px;
                padding: 10px;
                text-align: center;
            }
            th:first-child {
                padding-left: 30px;
                text-align: left;
            }
        }
    }
    .cart-none {
        text-align: center;
        padding: 150px 0;
        background: #fff;
    }
    .el-button {
        width: 180px;
        height: 50px;
        font-size: 16px;
    }
</style>