import axios from 'axios';
import { wxy } from '../utils/wxy'
import pinia from '../store/store';
import { useLoginStore } from '../store/login';
const axiosApi = wxy.AxiosRequest();
const store = useLoginStore(pinia);

const http = new axiosApi({
    axios: axios,
    // npm i --save-dev @types/node
    process: import.meta.env.MODE,
    baseURL: {
        // development: "https://pcapi-xiaotuxian-front-devtest.itheima.net",
        development: "https://apipc-xiaotuxian-front.itheima.net/",
        production: "https://apipc-xiaotuxian-front.itheima.net/"

    },
    headers: ["Content-Type", "application/json"],
    timeout: 5000,
    // 请求拦截设置
    requestConfig(config: any) {
        // 判断状态存储中是否有token
        if (store.getToken) {
            // 如果有token就发送到后台
            config.headers.Authorization = `Bearer ${store.getToken}`
        }
        return config;
    },
    // 请求拦截出错
    requestError(error: any) {
        return Promise.reject(error);
    },
    // 响应成功
    responseSuccess(response: any) {
        return response.data;
    },
    // 响应失败
    responseError(error: any) {
        let { response } = error;
        if (response) {
            //服务器最起码返回结果了
            switch (response.status) {
                case 401://当前请求需要用户验证（未登录）--权限
                    // 模态框提示操作或者跳转路由--移除token
                    store.removeToken();
                    break;
                case 403://token过期了  --服务器拒绝执行
                    store.removeToken();
                    break;
                case 404://找不到页面
                    alert(404)
                    break;
            }
        } else {
            //服务器连结果都没有返回
            if (!window.navigator.onLine) {
                //断网处理：可以跳转到断网页面
                return;
            }
            return Promise.reject(error);
        }
    }
});
export default {
    getAxios: (url: string, params?: object) => http.request({
        method: 'GET', url, params
    }),
    postAxios: (url: string, params?: object) => http.request({
        method: 'POST', url, params
    }),
    putAxios: (url: string, params?: object) => http.request({
        method: 'PUT', url, params
    }),
    deleteAxios: (url: string, params?: object) => http.request({
        method: 'DELETE', url, params
    }),
    defineAxios: (
        method: string,
        url: string,
        params?: object,
        successState?: Function,
        errorState?: Function
    ) => http.request({
        method,
        url,
        params,
        successState,
        errorState
    }),
}

