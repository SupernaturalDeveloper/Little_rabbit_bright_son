import $ from '../axios'
import type {
    ISkuID,
    IIds,
    ICartList,
    IInsertCart,
    ICheckAllCart
} from '../../interface/IAPI/cart'
/**
 * 获取商品的 最新价格  库存  是否有效
 * @param {String} skuId - SKU id
 */
const getNewCartGoods = ({ skuId }: ISkuID<number>) => $.getAxios(`goods/stock/${skuId}`);
/**
 *  获取商品对应的sku数据
 *  @param {String} skuId - SKU id
 */
const getGoodsSku = ({ skuId }: ISkuID<number>) => $.getAxios(`goods/sku/${skuId}`);
/**
 * 合并购物车
 * @param {Array<object>} cartList - 购物车信息列表
 * @param {String} object.skuId - SKUID
 * @param {Boolean} object.selected - 选中状态
 * @param {Integer} object.count - 数量
 */
const postMergeCart = (cartList?: ICartList<number | string, number>) => $.getAxios('member/cart/merge', cartList);
/**
 * 获取购物车列表
 * @returns
 */
const getFindCart = () => $.getAxios('member/cart')
/**
 * 加入购物车
 * @param {String} skuId - SKUID
 * @param {Integer} count - 加入购物车数量
 * @returns
 */
const postInsertCart = (insertCart: IInsertCart<string | number, number>) => $.postAxios('member/cart', insertCart);
/**
 * 删除购物车商品，支批量
 * @param {Array<string>} ids - skuId 的集合
 */
const deleteCart = (ids: IIds) => $.deleteAxios('member/cart', ids);
/**
 * 修改购物车商品（状态，数量）
 *  @param { String } skuId - SKUID
 *  @param { Integer } count - 加入购物车数量
 * @param { Boolean } selected - 选中状态
 * @returns
 * */
const putUpdateCart = ({ skuId, selected, count }: ICartList<number | string, number>) => $.putAxios(`member/cart/${skuId}`, { selected, count });
/**
 * 全部选中&取消全选
 * @param {Boolean} selected - 选中状态
 * @param {Array<string>} ids - skuId 的集合
 */
const putCheckAllCart = (checkAllCart: ICheckAllCart) => $.putAxios('member/cart/selected', checkAllCart);
export {
    //  * 获取商品的 最新价格  库存  是否有效
    getNewCartGoods,
    //  *  获取商品对应的sku数据
    getGoodsSku,
    //  * 合并购物车
    postMergeCart,
    //  * 获取购物车列表
    getFindCart,
    //  * 加入购物车
    postInsertCart,
    //  * 删除购物车商品，支批量
    deleteCart,
    //  * 修改购物车商品（状态，数量）
    putUpdateCart,
    //  * 全部选中&取消全选
    putCheckAllCart
}