// 提供首页相关API函数
import $ from '../axios'
import type { ILimit } from '../../interface/IAPI/home';
/**
 * 获取品牌
 * @param {Integer} limit - 品牌个数
 * @returns Promise
 */
const getFindBrand = ({ limit = 6 }: ILimit): Promise<any> => $.getAxios('home/brand', { limit });
/**
 * 获取广告区轮播图
 * @returns Promise
 */
const getFindBanner = () => $.getAxios('home/banner');
/**
 * 获取新鲜好物
 * @returns Promise
 */
const getFindNew = () => $.getAxios('home/new');
/**
 * 获取人气推荐
 * @returns Promise
 */
const getFindHot = () => $.getAxios('home/hot');
/**
 * 获取商品板块
 * @returns Promise
 */
const getFindGoods = () => $.getAxios('home/goods');
/**
 * 获取最新专题
 * @returns Promise
 */
const getFindSpecial = () => $.getAxios('home/special');
export {
    //  * 获取品牌
    getFindBrand,
    //  * 获取广告区轮播图
    getFindBanner,
    //  * 获取新鲜好物
    getFindNew,
    //  * 获取人气推荐
    getFindHot,
    //  * 获取商品板块
    getFindGoods,
    //  * 获取最新专题
    getFindSpecial,

}