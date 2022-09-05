<template>
    <div class="cartGoods">
        <div class="goodsImg">
            <img
                src="https://yanxuan-item.nosdn.127.net/bcb8efeee3977d417b961c1eba4584a5.jpg"
                alt=""
            />
        </div>
        <div class="goodsDetail">
            <div class="goodsRight">
                <p class="goodsTitle">
                    90%白鸭绒，儿童棒球领轻薄羽绒服73-140cm
                </p>
                <div class="cartSku" ref="kind">
                    <div class="cartSkuTitle" @click="openKind">
                        <span
                            >123164dfghjkksmkmgjkdfsjkgjklsdfjkjklsdfgjklsdfgklnnkldfgnnsdfgkl6</span
                        >
                        <el-icon><ArrowDown /></el-icon>
                    </div>
                    <div class="kindBox" style="display: none">123456</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { useCartItemKind } from "../../../../store";
    import { ref } from "vue";
    const kind = ref<HTMLElement | null>(null);
    const store = useCartItemKind();
    const openKind = () => {
        if (!store.goodsKinds.includes(kind as never)) {
            store.goodsKinds.push(kind as never);
        }
    };
</script>
<style lang="scss" scoped>
    .cartGoods {
        width: 100%;
        display: flex;
        align-items: center;
        .goodsImg {
            img {
                width: 100px;
                height: 100px;
            }
        }
        .goodsDetail {
            width: 280px;
            font-size: 16px;
            padding-left: 10px;
            text-align: left;
            line-height: 24px;
            box-sizing: border-box;

            .goodsTitle {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #666;
            }
            .cartSku {
                height: 28px;
                border: 1px solid #f5f5f5;
                padding: 0 6px;
                position: relative;
                margin-top: 10px;
                .cartSkuTitle {
                    width: 100%;

                    display: inline-block;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    span {
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }

                .kindBox {
                    position: absolute;
                    left: -1px;
                    top: 40px;
                    z-index: 10;
                    width: 400px;
                    border: 1px solid #27ba9b;
                    box-shadow: 2px 2px 4px #e6faf6;
                    background: #fff;
                    border-radius: 4px;
                    font-size: 14px;
                    padding: 20px;
                    &::before {
                        content: "";
                        width: 12px;
                        height: 12px;
                        border-left: 1px solid #27ba9b;
                        border-top: 1px solid #27ba9b;
                        position: absolute;
                        left: 12px;
                        top: -8px;
                        background: #fff;
                        transform: scaleX(0.8) rotate(45deg);
                    }
                }
            }
        }
    }
</style>