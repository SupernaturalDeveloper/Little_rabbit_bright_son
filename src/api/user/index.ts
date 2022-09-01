// 用户相关的接口

import $ from '../axios'
import type {
    IAccount,
    IMobile,
    IAccountLogin,
    IMobileLogin,
    IQQLogin,
    IQQBindLogin,
    IQQPatchLogin
} from '../../interface/IAPI/user'
/**
 * 帐号密码登录
 * @param {String} account - 帐号
 * @param {String} password - 密码
 * @returns promise
 */
const postUserAccountLogin = ({ account, password }: IAccountLogin) => $.postAxios('login', { account, password });
/**
 * 获取手机号的短信验证码
 * @param {String} mobile - 手机号
 * @returns promise
 */
const getUserMobileLoginMsg = ({ mobile }: IMobile) => $.getAxios('login/code', { mobile });
/**
 * 手机号登录
 * @param {String} mobile - 手机号
 * @param {String} code - 短信验证码，默认123456
 * @returns promise
 */
const postUserMobileLogin = ({ mobile, code = '123456' }: IMobileLogin) => $.postAxios('login/code', { mobile, code });
/**
 * QQ登录
 * @param {String} unionId - QQ唯一标识，openId
 * @param {Number} source - 客户端类型 1 PC
 * @returns
 */
const postUserQQLogin = ({ unionId, source = 1 }: IQQLogin) => $.postAxios('login/social', { unionId, source });
/**
 * 获取QQ绑定的时候短信验证码
 * @param {String} mobile - 手机号
 * @returns promise
 */
const getUserQQBindCode = ({ mobile }: IMobile) => $.getAxios('login/social/code', { mobile });
/**
 * QQ登录-绑定帐号
 * @param {String} unionId - QQ唯一标识，openId
 * @param {String} mobile - 手机号
 * @param {String} code - 验证码
 * @returns
 */
const postUserQQBindLogin = ({ unionId, mobile, code }: IQQBindLogin) => $.postAxios('login/social/bind', { unionId, mobile, code });
/**
 * 校验用户是否存在
 * @param {String} account - 帐号
 * @returns promise
 */
const getUserAccountCheck = ({ account }: IAccount) => $.getAxios('register/check', { account });
/**
 * 获取QQ完善信息的时候短信验证码
 * @param {String} mobile - 手机号
 * @returns promise
 */
const getUserQQPatchCode = ({ mobile }: IMobile) => $.getAxios('register/code', { mobile });
/**
 * QQ登录-完善信息
 * @param {String} unionId - QQ唯一标识，openId
 * @param {String} mobile - 手机号
 * @param {String} code - 验证码
 * @param {String} account - 帐号
 * @param {String} password - 密码
 * @returns
 */
const postUserQQPatchLogin = ({ unionId, mobile, code, account, password }: IQQPatchLogin) => $.postAxios(`login/social/${unionId}/complement`, { unionId, mobile, code, account, password });
export {
    //  * 帐号密码登录
    postUserAccountLogin,
    //  * 获取手机号的短信验证码
    getUserMobileLoginMsg,
    //  * 手机号登录
    postUserMobileLogin,
    //  * QQ登录
    postUserQQLogin,
    //  * 获取QQ绑定的时候短信验证码
    getUserQQBindCode,
    //  * QQ登录-绑定帐号
    postUserQQBindLogin,
    //  * 校验用户是否存在
    getUserAccountCheck,
    //  * 获取QQ完善信息的时候短信验证码
    getUserQQPatchCode,
    //  * QQ登录-完善信息
    postUserQQPatchLogin
}