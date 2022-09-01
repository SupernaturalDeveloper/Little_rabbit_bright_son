// 小兔鲜常量数据
import type { ICONST } from "../../interface/IAPI/const"

const constData: ICONST = {
    // 默认9个顶级分类
    topCategory: [
        '居家',
        '美食',
        '服饰',
        '母婴',
        '个护',
        '严选',
        '数码',
        '运动',
        '杂货'
    ],
    // 订单状态
    orderStatus: [
        { name: 'all', label: '全部订单' },
        { name: 'unpay', label: '待付款' },
        { name: 'deliver', label: '待发货' },
        { name: 'receive', label: '待收货' },
        { name: 'comment', label: '待评价' },
        { name: 'complete', label: '已完成' },
        { name: 'cancel', label: '已取消' }
    ],
    //   删除原因
    cancelReason: [
        '配送信息有误',
        '商品买错了',
        '重复下单/误下单',
        '忘记使用优惠券、兔币等',
        '其他渠道价格更低',
        '不想买了'
    ]
}
export default constData;