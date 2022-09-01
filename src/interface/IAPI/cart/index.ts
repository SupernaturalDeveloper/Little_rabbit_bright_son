interface ISkuID<T> {
    skuId: T;
}
interface ISelected {
    selected: boolean;
}
interface ICount<T> {
    count: T;
}
interface IIds {
    ids: Array<string>
}
interface IInsertCart<T, N> extends ISkuID<T>, ICount<N> { }
interface ICheckAllCart extends ISelected, IIds { }
interface ICartList<T, N> extends IInsertCart<T, N>, ISelected { }
export type {
    ISkuID,
    ISelected,
    ICount,
    IIds,
    ICartList,
    IInsertCart,
    ICheckAllCart
}