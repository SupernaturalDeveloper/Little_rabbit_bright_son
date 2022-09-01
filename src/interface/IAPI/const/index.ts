type OrderStatus = {
    name: string,
    label: string
}
interface ICONST {
    topCategory: Array<string>;
    orderStatus: Array<OrderStatus>;
    cancelReason: Array<string>;
}
export type {
    ICONST
}