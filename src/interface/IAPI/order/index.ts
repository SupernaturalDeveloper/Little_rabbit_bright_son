import type { IInsertCart } from '../cart'
interface IOrderID<N> {
    id: N
}

interface IAddress<S, N> {
    address: S;
    addressTags: S | N;
    cityCode: S | N;
    contact: S;
    countyCode: S | N;
    fullLocation: S;
    id: S | N;
    isDefault: N;
    postalCode: S;
    provinceCode: S;
    receiver: S;
}
interface ISubmitOrder<S, N> {
    addressId: S;
    buyerMessage: S;
    deliveryTimeType: N;
    goods: Array<IInsertCart<S | N, N>>;
    payChannel: N;
    payType: N;
}
interface IOrderList<N> {
    page: N
    pageSize: N
    orderState: N
}
interface ICancelOrder {
    orderId: number | string,
    cancelReason: string
}
export type {
    IOrderID,
    IAddress,
    ISubmitOrder,
    IOrderList,
    ICancelOrder
}