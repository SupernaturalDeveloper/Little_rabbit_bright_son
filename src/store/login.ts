import { defineStore } from 'pinia';
import { Names } from './store-namespace';
import { postUserAccountLogin } from '../api/user';
import type { IAccountLogin } from '../interface/IAPI/user';
import type { USER } from '../interface/Ilogin';
import router from '../router'
export const useLoginStore = defineStore(Names.Login, {
    state: () => {
        return {
            userInfo: {
                profile: {},
                redirectUrl: '/'
            }
        }
    },

    actions: {
        async accountLogin(info: IAccountLogin) {
            try {
                let data = await postUserAccountLogin(info);
                const {
                    account,
                    avatar,
                    id,
                    mobile,
                    nickname,
                    token,
                } = data.result;
                const user: USER<string> = {
                    profile: {
                        account, avatar, id, mobile, nickname, token
                    },
                    redirectUrl: '/'
                }
                // pinia持久化存储用户登录信息状态

                console.log(user)
                // 本地缓存用户信息
                window.localStorage.setItem('userInfo', JSON.stringify(user));
                this.userInfo = user;
            } catch (error) {
                return error;
            }
        },
        // 重定向到首页
        // 移除token
        removeToken() {
            const user = {
                profile: {},
                redirectUrl: "/",
            };
            window.localStorage.setItem("userInfo", JSON.stringify(user));
            this.userInfo = user;
        }


    },
    getters: {
        // 获取token
        getToken(state) {
            if ((state.userInfo as any).profile['token']) {
                return (state.userInfo as any).profile.token
            }
            return null;
        }
    },
    persist: true,
})