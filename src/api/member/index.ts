import $ from '../axios'
import type { IFindCollect } from '../../interface/IAPI/member'
/**
 * 获取收藏分页数据
 * @param {Integer} collectType - 收藏类型，1为商品，2为专题，3为品牌
 * @returns
 */
const getFindCollect = ({ page = 1, pageSize = 10, collectType = 1 }: IFindCollect<number>) => $.getAxios('member/collect', { page, pageSize, collectType });
export {
    // *获取收藏分页数据
    getFindCollect
}
