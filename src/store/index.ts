import { defineStore } from 'pinia';
import { Names } from './store-namespace'
import { getGoodsSku, putCheckAllCart, getFindCart, putUpdateCart, deleteCart } from '../api/cart';
import type { ICartList, ISkuID, IIds } from '../interface/IAPI/cart';

export const useCartStore = defineStore(Names.Cart, {
    state: () => {
        return {
            ShoppingCartData: [],
            ShoppingCartIds: [],
            selectedData: [],
            kindData: []
        }
    },
    getters: {
        // 全选状态
        checkAllStatus(state) {
            if (state.selectedData.length > 0 && !state.selectedData.includes(false as never)) {
                return true;
            }
            return false;
        },
        // 获取更新后的数据
        getShoppingCartData(state) {
            return state.ShoppingCartData
        },
        // 获取种类信息
        getKindMessage(state) {
            return state.kindData;
        },
        // 获取商品数量
        getCounter(state) {
            return state.ShoppingCartData.reduce((pre, cur) => {
                return pre + cur['count'];
            }, 0)
        },
        //获取选中数量
        getSelectedCounter(state) {
            return state.ShoppingCartData.filter((item: any) => item.selected).reduce((pre, cur) => {
                return pre + cur['count'];
            }, 0)
        },
        // 汇总
        getReducePrice(state) {
            return state.ShoppingCartData.filter(item => item['selected']).reduce((pre, cur) => {
                return pre + (cur['count'] * cur['price'])
            }, 0)
        }
    },
    actions: {
        // 获取购物车数据
        async getCartData() {
            try {
                let data = await getFindCart()
                this.ShoppingCartData = data.result;
                this.ShoppingCartIds = data.result.map((item: any) => item.skuId);
                this.getSelected();
            } catch (error) {
                return error
            }
        },
        getSelected() {
            this.selectedData = this.ShoppingCartData.map(item => {
                return item['selected']
            })
        },
        // 设置购物车是否全选
        async setCheckAllStatus(isCheckAll: boolean) {
            try {
                await putCheckAllCart({
                    selected: isCheckAll,
                    ids: this.ShoppingCartIds
                });
                this.getCartData();
            } catch (error) {
                return error;
            }
        },
        // 购物车单选
        async setSelectedStatus({ skuId, selected }: ICartList<number | string, number>) {
            try {
                await putUpdateCart({
                    skuId, selected
                })
                this.getCartData();
            } catch (error) {
                return error;
            }
        },
        // 过去种类列表
        async getKindData({ skuId }: ISkuID<number>) {
            try {
                let data = await getGoodsSku({ skuId });
                this.kindData = data.result;
                console.log(this.kindData)
            } catch (error) {
                return error;
            }
        },
        async deleteCartItem(ids: IIds) {
            try {
                let data = await deleteCart(ids);
                this.getCartData();
            } catch (error) {
                return error;
            }
        },
        // 修改数量加加减减
        async setCartCount({ skuId, count }: ICartList<number | string, number>) {
            try {
                let data = await putUpdateCart({ skuId, count });
                this.getCartData();
            } catch (error) {
                return error;
            }
        }
    },
    persist: true
})
export const useCartItemKind = defineStore(Names.Kind, {
    state: () => {
        return {
            goodsKinds: [],
        }
    },
    getters: {

    },
    actions: {}
})