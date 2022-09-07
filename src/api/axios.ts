import axios from 'axios';
import { wxy } from '../utils/wxy'


const axiosApi = wxy.AxiosRequest();
const http = new axiosApi({
    axios: axios,
    // npm i --save-dev @types/node
    process: import.meta.env.MODE,
    baseURL: {
        // development: "https://pcapi-xiaotuxian-front-devtest.itheima.net",
        development:'https://apipc-xiaotuxian-front.itheima.net/',
        production: "https://apipc-xiaotuxian-front.itheima.net/"
    },
    headers: ["Content-Type", "application/json"],
    timeout: 5000,
    requestConfig(config: any) {
        // if (window.localStorage.getItem('token')) {
        //     config.headers.Authorization = `bearer ${window.localStorage.getItem('token')}`
        // }
        config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJuYW1lXCI6XCJEaWRcIixcImlkXCI6XCIxMzY5NTk0OTU0NzM5ODU5NDU4XCIsXCJ1c2VybmFtZVwiOlwieGlhb3R1eGlhbjAwMVwifSIsImlhdCI6MTY2MjQ2NTE5NywiZXhwIjoxNjYyNzI0Mzk3fQ.e4p5WKaAor6vnvjcNh_0YcAt1DezLhmwXvpew1rPZWY`
        return config;
    },
    requestError(error: any) {
        return Promise.reject(error);
    },
    responseSuccess(response: any) {
        return response.data;
    },
    responseError(error: any) {
        let { response } = error;
        if (response) {
            //服务器最起码返回结果了
            switch (response.status) {
                case 401://当前请求需要用户验证（未登录）--权限
                    // 模态框提示操作或者跳转路由
                    alert(401);
                    break;
                case 403://token过期了  --服务器拒绝执行
                    alert(403)
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

