<template>
    <div class="cartGoods">
        <div class="goodsImg">
            <img :src="itemObj?.picture" alt="" />
        </div>
        <div class="goodsDetail">
            <div class="goodsRight">
                <p class="goodsTitle">
                    {{ itemObj?.name }}
                </p>
                <div class="cartSku" ref="kind">
                    <div class="cartSkuTitle" @click="openKind">
                        <span>{{ itemObj?.attrsText }}</span>
                        <el-icon><ArrowDown /></el-icon>
                    </div>
                    <div class="kindBox" style="display: none">
                        <dl
                            v-for="item in (cartStore.getKindMessage as any).specs"
                            :key="item?.id"
                        >
                            <dt>{{ item?.name }}</dt>
                            <dd>
                                <template
                                    v-for="(DItem, index) in item?.values"
                                    :key="index + Math.random()"
                                >
                                    <img
                                        v-if="DItem.picture"
                                        :src="DItem.picture"
                                        :title="DItem.name"
                                        :class="
                                            isGreenBorder[item.name] ==
                                            DItem.name
                                                ? 'greenBorder'
                                                : ''
                                        "
                                        @click="imgClick(item.name, DItem.name)"
                                    />
                                    <span
                                        :class="
                                            isGreenBorder[item.name] ==
                                            DItem.name
                                                ? 'greenBorder'
                                                : ''
                                        "
                                        @click="
                                            spanClick(item.name, DItem.name)
                                        "
                                        v-else
                                        >{{ DItem.name }}</span
                                    >
                                </template>
                            </dd>
                        </dl>
                        <el-button type="primary">确认</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { useCartItemKind, useCartStore } from "../../../../store";
    import { ref, defineProps, computed } from "vue";
    const props = defineProps({
        ITEM: Object,
    });
    let itemObj = computed(() => {
        return props.ITEM;
    });
    const kind = ref<HTMLElement | null>(null);
    const store = useCartItemKind();
    const cartStore = useCartStore();
    const openKind = () => {
        if (!store.goodsKinds.includes(kind as never)) {
            store.goodsKinds.push(kind as never);
        }
        cartStore.getKindData({ skuId: props?.ITEM?.skuId });
    };
    const isGreenBorder = computed({
        get: () => {
            interface OBJ {
                [propName: string]: any;
            }
            const obj: OBJ = {};
            for (let item of itemObj.value?.attrsText.trim().split(" ")) {
                let keyValue: Array<any> = item.split(":");
                obj[keyValue[0]] = keyValue[1];
            }
            return obj;
        },
        set: val => {
            console.log(val);
            Object.assign(tabBorder, val);
        },
    });
    const tabBorder = { 颜色: "米白色", 尺码: "39" };
    // console.log(isGreenBorder.value);
    const imgClick = (key: any, val: any) => {
        Object.assign(tabBorder, { [key]: val });
        // console.log(key, val, tabBorder);
    };
    const spanClick = (key: any, val: any) => {
        Object.assign(tabBorder, { [key]: val });
        // console.log(key, val, tabBorder);
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
                padding: 0 6px;
                position: relative;
                margin-top: 10px;
                display: flex;
                .cartSkuTitle {
                    border: 1px solid #f5f5f5;
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
                    dl {
                        display: flex;
                        padding-bottom: 10px;
                        align-items: center;
                        dt {
                            width: 50px;
                            color: #999;
                        }
                        dd {
                            flex: 1;
                            color: #666;
                            line-height: 40px;

                            img {
                                width: 50px;
                                height: 50px;
                                margin-bottom: 5px;
                                border: 1px solid #e4e4e4;
                                margin-right: 10px;
                                cursor: pointer;
                            }
                            span {
                                display: inline-block;
                                height: 30px;
                                line-height: 28px;
                                padding: 0 20px;
                                border: 1px solid #e4e4e4;
                                margin-right: 10px;
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }
    }
    .greenBorder {
        border-color: #27ba9b !important;
    }
</style>