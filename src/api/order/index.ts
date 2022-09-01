import $ from '../axios'
import type {
    IOrderID,
    IAddress,
    ISubmitOrder,
    IOrderList,
    ICancelOrder
} from '../../interface/IAPI/order';
/**
 * 结算页面-生成订单-根据购物车选中商品
 * @returns
 */
const getCreateOrder = () => $.getAxios('member/order/pre');
/**
 * 结算页面-生成订单-根据订单中商品-再次购买
 * @returns
 */
const getRepurchaseOrder = ({ id }: IOrderID<string | number>) => $.getAxios('member/order/repurchase/' + id);
/**
 * 添加收货地址
 * @param {Object} form - 参考接口文档
 */
const postAddAddress = (form: IAddress<string, number>) => $.postAxios('member/address', form);
/**
 * 修改收货地址
 * @param {Object} form - 参考接口文档
 */
const putEditAddress = (form: IAddress<string, number>) => $.putAxios(`member/address/${form.id}`, form);
/**
 * 结算页面-提交订单
 * @param {Object} params - 参考接口文档
 * @returns
 */
const postSubmitOrder = (params: ISubmitOrder<string, number>) => $.postAxios('member/order', params);
/**
 * 获取订单详细
 * @param {String} orderId - 订单ID
 * @returns
 */
const getFindOrderDetail = ({ id }: IOrderID<string | number>) => $.getAxios('member/order/' + id);
/**
 * 获取订单列表
 * @param {String} page - 页码
 * @param {String} pageSize - 每页条数
 * @param {String} orderState - 订单状态，1为待付款、2为待发货、3为待收货、4为待评价、5为已完成、6为已取消，未传该参数或0为全部
 * @returns
 */
const getFindOrderList = ({ page = 1, pageSize = 10, orderState = 0 }: IOrderList<number>) => $.getAxios('member/order', { page, pageSize, orderState });
/**
 * 取消订单
 * @param {String} orderId - 订单ID
 * @param {String} cancelReason - 取消原因
 * @returns
 */
const putCancelOrder = ({ cancelReason, orderId }: ICancelOrder) => $.putAxios(`member/order/${orderId}/cancel`, { cancelReason });
/**
 * 删除订单
 * @param {String} orderId - 订单ID
 * @returns
 */
const deleteOrder = ({ id }: IOrderID<number | string>) => $.deleteAxios('member/order', { ids: [id] });
/**
 * 确认收货
 * @param {String} orderId - 订单ID
 * @returns
 */
const putConfirmOrder = ({ id }: IOrderID<number | string>) => $.putAxios(`member/order/${id}/receipt`);
/**
 * 查询物流
 * @param {String} orderId - 订单ID
 * @returns
 */
const getLogisticsOrder = ({ id }: IOrderID<number | string>) => $.getAxios(`member/order/${id}/logistics`);
export {
    //  * 结算页面-生成订单-根据购物车选中商品
    getCreateOrder,
    //  * 结算页面-生成订单-根据订单中商品-再次购买
    getRepurchaseOrder,
    //  * 添加收货地址
    postAddAddress,
    //  * 修改收货地址
    putEditAddress,
    //  * 结算页面-提交订单
    postSubmitOrder,
    //  * 获取订单详细
    getFindOrderDetail,
    //  * 获取订单列表
    getFindOrderList,
    //  * 取消订单
    putCancelOrder,
    //  * 删除订单
    deleteOrder,
    //  * 确认收货
    putConfirmOrder,
    //  * 查询物流
    getLogisticsOrder
}
