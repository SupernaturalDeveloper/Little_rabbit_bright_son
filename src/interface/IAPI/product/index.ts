interface IProductID {
    id: number | string
}
interface IRelevantGoods extends IProductID {
    limit: number;
}
interface IGoodsHot extends IRelevantGoods {
    type: number
}
interface IGoodsCommentList extends IProductID {
    params: object
}
export type {
    IProductID,
    IRelevantGoods,
    IGoodsCommentList,
    IGoodsHot
}
