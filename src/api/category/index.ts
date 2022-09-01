import $ from '../axios'
import type { IFirstID, ISecondID, IParams } from '../../interface/IAPI/category'
/**
 * 获取所有分类（顶级，二级，对应的商品推荐数据）
 * @returns Promise
 */
const getFindAllCategory = () => $.getAxios('home/category/head')
/**
 * 获取顶级类目信息（children属性就是各个子分类）
 * @param {String} id - 顶级类目ID
 * @returns
 */
const getFindTopCategory = (id: IFirstID<string | number>) => $.getAxios('category', id);
/**
 * 获取二级类目的筛选条件数据
 * @param {String} id - 二级类目ID
 * @returns
 */
const getFindSubCategoryFilter = (id: ISecondID<string | number>) => $.getAxios('category/sub/filter', id);
/**
 * 获取商品列表
 * @param params 分类id、筛选条件、排序条件、分页信息
 * @returns {*}
 */

const postFindSubCategoryGoods = (params: IParams): Promise<any> => $.getAxios('category/goods/temporary', params);

const postFindSubCategoryGoods = (params: IParams): Promise<any> => $.postAxios('category/goods/temporary', params);

export {
    //  * 获取所有分类（顶级，二级，对应的商品推荐数据）
    getFindAllCategory,
    //   * 获取顶级类目信息（children属性就是各个子分类）
    getFindTopCategory,
    //   * 获取二级类目的筛选条件数据
    getFindSubCategoryFilter,
    //   * 获取商品列表(带筛选条件)
    postFindSubCategoryGoods
}