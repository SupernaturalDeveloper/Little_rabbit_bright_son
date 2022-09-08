abstract class AMixin {
    // 拷贝对象属性
    abstract CopyProperties(target: object, source: object): void;
    //  混合类
    abstract MIX(): Object;
}
/**
 * @混合类
 *  将多个类合并成一个
**/
class Mixin extends AMixin {
    copyT(key: any): boolean {
        return key !== 'constructor' && key !== 'prototype' && key != 'name';
    }
    // 拷贝属性
    CopyProperties(target: object, source: object): void {
        for (let key of Reflect.ownKeys(source)) {
            if (this.copyT(key)) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key) as object)
            }
        }
    }
    // 混合类
    MIX(...rest: Array<Function>) {
        const _this = this;
        class Mix {
            constructor() {
                for (let CLASS of rest) {
                    _this.CopyProperties(this, Reflect.construct(CLASS, []) as Object);
                }
            }
        }
        for (let CLASS of rest) {
            _this.CopyProperties(Mix, CLASS);
            _this.CopyProperties(Mix.prototype, CLASS.prototype);
        }
        return Mix;
    }
}
/*__________________________________________________________________________________________
__________________________________________________________________________________________*/
interface IOriginVtoV {
    value: number | string;
    toValue: number | string;
    callback: (val?: number) => void;
    controlSpeed?: number;
    fluent?: number;
}
type Info = {
    sum: number,
    toValue: number,
    timer: any
}
/**
 * @OriginTools 
 * @原创方法工具类
**/
class OriginTools {
    /**
     * @VTOVSlow
     * @两个数之间的过渡 0-100
     * @params
     *      {
     *          value:number,
     *          toValue:number,
     *          callback(val){},
     *          controlSpeed?:3,
     *          fluent?:30
     *      }
     * */
    VTOVSlow({ value, toValue, callback, controlSpeed = 3, fluent = 30 }: IOriginVtoV) {
        const info: Info = {
            sum: Number.parseInt(value as string),
            toValue: Number.parseInt(toValue as string),
            timer: 0
        };
        clearTimeout(info.timer)
        const TimeoutHandle = () => {
            let stop: boolean = true;
            let value: number = info.sum;
            let speed: number = (info.toValue - value) / controlSpeed;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (value != toValue) stop = false;
            info.sum = value + speed;
            callback && callback(info.sum);
            if (stop) {
                clearTimeout(info.timer);
                // callback&&callback(value);
            } else {
                info.timer = setTimeout(TimeoutHandle, fluent)
            }
        }
        TimeoutHandle();
        // clearInterval(info.timer);
        // info.timer = setInterval(function () {
        //     let stop: boolean = true;
        //     let value: number = info.sum;
        //     let speed: number = (info.toValue - value) / controlSpeed;
        //     speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        //     if (value != toValue) stop = false;
        //     info.sum = value + speed;
        //     callback && callback(info.sum);
        //     if (stop) {
        //         clearInterval(info.timer);
        //         // callback&&callback(value);
        //     }
        // }, fluent);
    }
    /**
     * @GetRandom
     * @获取两个数之间的随机数
     *  @params min:number,max:number
     * */
    GetRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    /**
     * @GetRandomRGBA
     * @获取rgba随机颜色
     * */
    GetRandomRGBA(): string {
        const RGB: Array<number> = Array.from({ length: 3 }, _ => this.GetRandom(0, 255));
        return `rgba(${RGB.join(',')},${Math.random()})`;
    }
    /**
     * @SortSJR
     * @排序 (升序a-b小->大，降序b-a大->小，随机排序Math.random()-0.5)
     * @params 
     *      arr:[{},{}]/[1,2,3],
     *      desc:0(小到大)/1(大到小)/2随机
     *      key:desc为0/1的前提下 并且 数组数据结构为[{},{}]
     * */
    SortSJR(arr: Array<unknown>, desc: number = 0, key: string | number) {
        return arr.sort((a: any, b: any): any => {
            if (desc === 2) return Math.random() - 0.5;
            if (desc !== 2) {
                if (key) {
                    switch (desc) {
                        case 0:
                            return a[key] - b[key];
                        case 1:
                            return b[key] - a[key];
                    }
                } else {
                    switch (desc) {
                        case 0:
                            return a - b;
                        case 1:
                            return b - a;
                    }
                }
            }

        })
    }
    /**
     * @CreateNumberArr
     * @生成指定两个整数之间的数组
     * @params start:number,end:number
     * */
    CreateNumberArr(start: number, end: number): Array<number> {
        return Array.from({ length: end - start < 0 ? start - end + 1 : end - start + 1 }, () => {
            if (end - start < 0) {
                return start--;
            }
            return start++;
        });
    }
    /**
     * @CreateLetterArr
     * @生成26个英文字母
     * @params start:string("a"/"A"),end:string("z"/"Z")
     * */
    CreateLetterArr(start: string, end: string) {
        let s: number = start.codePointAt(0)!;
        let e: number = end.codePointAt(0)!;
        return Array.from({ length: e - s < 0 ? s - e + 1 : e - s + 1 }, () => {
            if (e - s < 0) {
                return String.fromCodePoint(s--);
            }
            return String.fromCodePoint(s++);
        });
    }
    /**
     * @CheckString
     * @校验字符串是否符合类型
     * @params
     *      str:string,type:string:"phone"/"tel".....
     * */
    CheckString(str: string, type: string) {
        // 校验字符串是否为以下类型
        switch (type) {
            case 'phone': //手机号码
                return /^1[3|4|5|6|7|8][0-9]{9}$/.test(str);
            case 'tel': //座机
                return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
            case 'card': //身份证
                return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
            case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
                return /^[a-zA-Z]\w{5,17}$/.test(str);
            case 'postal': //邮政编码
                return /[1-9]\d{5}(?!\d)/.test(str);
            case 'QQ': //QQ号
                return /^[1-9][0-9]{4,9}$/.test(str);
            case 'email': //邮箱
                return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
            case 'money': //金额(小数点2位)
                return /^\d*(?:\.\d{0,2})?$/.test(str);
            case 'URL': //网址
                return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str);
            case 'IP': //IP
                return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
            case 'date': //日期时间
                return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str);
            case 'number': //数字
                return /^[0-9]$/.test(str);
            case 'english': //英文
                return /^[a-zA-Z]+$/.test(str);
            case 'chinese': //中文
                return /^[\u4E00-\u9FA5]+$/.test(str);
            case 'lower': //小写
                return /^[a-z]+$/.test(str);
            case 'upper': //大写
                return /^[A-Z]+$/.test(str);
            case 'HTML': //HTML标记
                return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
            default:
                return true;
        }
    }
    /**
     * @IsCardID
     * @严格的身份证校验
     *  @params 
     *             ID:string(身份证号)
     * */
    IsCardID(ID: string) {
        if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(ID)) {
            console.log('你输入的身份证长度或格式错误');
            return false;
        }
        //身份证城市
        const mapCity: Map<number, string> = new Map();
        mapCity
            .set(11, '北京').set(12, '天津')
            .set(13, '河北').set(14, '山西')
            .set(15, '内蒙古').set(21, '辽宁')
            .set(22, '吉林').set(23, '黑龙江')
            .set(31, '上海').set(32, '江苏')
            .set(33, '浙江').set(34, '安徽')
            .set(35, '福建').set(36, '江西')
            .set(37, '山东').set(41, '河南')
            .set(42, '湖北').set(43, '湖南')
            .set(44, '广东').set(45, '广西')
            .set(46, '海南').set(50, '重庆')
            .set(51, '四川').set(52, '贵州')
            .set(53, '云南').set(54, '西藏')
            .set(61, '陕西').set(62, '甘肃')
            .set(63, '青海').set(64, '宁夏')
            .set(65, '新疆').set(71, '台湾')
            .set(81, '香港').set(82, '澳门')
            .set(91, '国外')

        if (!mapCity.get(parseInt(ID.substring(0, 2)))) {
            console.log('你的身份证地区非法');
            return false;
        }
        // 出生日期验证
        const birthday: Array<string> = [
            ID.substring(6, 10),
            ID.substring(10, 12),
            ID.substring(12, 14)
        ]
        const date: Date = new Date(birthday.join('/'));
        // 补零
        function zeroFill(n: number): string {
            return n < 10 ? `0${n}` : `${n}`;
        }
        const dateArr: Array<string> = [
            zeroFill(date.getFullYear()),
            zeroFill(date.getMonth() + 1),
            zeroFill(date.getDate())
        ]
        if (birthday.join('/') !== dateArr.join('/')) {
            console.log('身份证上的出生日期非法');
            return false;
        }
        // 身份证号码校验
        const weights: Array<number> = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        const codes: string = '10X98765432';
        const IDARR: Array<string> = ID.split('');
        const IDLAST: string = IDARR.pop()!;
        const sum: number = IDARR.reduce((pre, next, index) => pre + ((<any>next) * weights[index]), 0)
        let last: string = codes[sum % 11]; //计算出来的最后一位身份证号码
        if (IDLAST != last) {
            console.log('你输入的身份证号非法');
            return false;
        }
        return true;
    }
    /**
     * GetCurrentPostion
     * @获取地理位置
     * */
    GetCurrentPostion() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                return {
                    // 纬度
                    latitude: position.coords.latitude,
                    // 经度
                    longitude: position.coords.longitude,
                }
            });
        } else {
            /* 地理位置服务不可用 */
            return ` 地理位置服务不可用`;
        }
    }
    /**
     * @localeCompareSort
     * @对数组进行不区分大小写写的排序
     * @params arr<string>:['a','A','s','m']
     * */
    LocaleCompareSort(letterArr: Array<string>) {
        return letterArr.sort((a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true }));
    }
    /**
     * @deepClone
     * 递归深拷贝
     * */
    DeepClone(origin: any, target: any) {
        const O = target ?? {};
        const ToString = Object.prototype.toString;
        for (let prop in origin) {
            if (origin.hasOwnProperty(prop)) {
                if (origin[prop] && typeof origin[prop] == 'object') {
                    O[prop] = ToString.call(origin[prop]) == ToString.call([]) ? [] : {};
                    this.DeepClone(origin[prop], O[prop]);
                } else {
                    O[prop] = origin[prop];
                }
            }
        }
        return O;
    }
}
/*__________________________________________________________________________________________
__________________________________________________________________________________________*/
/**
 * @DomManipulation
 * @dom操作工具类
*/
class DomManipulation {
    /**
     * @$
     * @获取单个元素
     * */
    $(css: string, el: Document = document) {
        return el.querySelector(css);
    }
    /**
     * @_
     * @获取元素集合
     * */
    _(css: string, el: Document = document) {
        return el.querySelectorAll(css);
    }
    /**
     * @IsVisibleRange
     * @该函数用来判断某一个元素是否在可视区域
     * */
    IsVisibleRange(element: HTMLElement): boolean {
        let viewport: HTMLElement = document.documentElement;
        // getBoundingClientRect方法（所有的元素结点上都有这个方法）返回一个对象，提供当前元素节点的大小、位置等信息，基本上就是 CSS 盒状模型的所有信息。
        let rect: DOMRect = element.getBoundingClientRect();
        // 用户不管是从上向下、从下向上、从左向右、从右向左滑动，都可以判断当前元素是否在可视区域
        return rect['top'] < viewport['clientHeight'] && rect['bottom'] > 0 && rect['left'] < viewport['clientWidth'] && rect['right'] > 0;
    }

}
/*__________________________________________________________________________________________
__________________________________________________________________________________________*/
interface CookieOptions {
    type: string;
    key?: any;
    value?: any;
    day: number;
}
/**
 * @StorageControl
 * @本地存储操作工具
 * */
class StorageControl {
    /**
     * @cookie
     * @cookie增删改查方法
     * @params 
     *          options:{
     *                类型
     *              type:'get/getall/set/remove/clear',
     *                键
     *              key:any,
     *                值
     *              value:any,
     *               存储天数默认1
     *              day:number
     *          }
     * */
    cookie(options: CookieOptions): Promise<object> {
        // 解构赋值
        let { type, key, value, day = 1 } = options;
        // 创建Map数据结构用于存储type类型
        const typeMap: Map<string, number> = new Map();
        // 获取当前this对象
        const self = this;
        typeMap
            .set('get', 1)
            .set('getall', 2)
            .set('set', 3)
            .set('remove', 4)
            .set('clear', 5);
        // 获取类的对应值
        const getType: number = typeMap.get(type)!;
        // if  对应值为1||2 将执行get/getall操作
        if (Object.is(getType, 1) || Object.is(getType, 2)) {
            // if 对应值为1 将执行获取指定键的操作
            if (Object.is(getType, 1)) {
                // 判断是否能获取当前键如果存在将返回对应的value值
                if (self.GetCookie(key as string)) {
                    return Promise.resolve({
                        message: `获取成功！`,
                        code: 1,
                        data: self.GetCookie(key as string)
                    })
                }
            }
            //   // if 对应值为2 将执行获取all所有键的操作
            if (Object.is(getType, 2)) {
                // 判断是否能获取所有键如果存在将返回对应的value值
                if (self.GetallCookie()) {
                    return Promise.resolve({
                        message: `获取成功！`,
                        code: 1,
                        data: self.GetallCookie()
                    })
                }
            }
            // 失败返回的Promise对象
            return Promise.reject({
                message: `获取失败！`,
                code: 0,
                data: []
            })
        }
        //  if  对应值为4||5 将执行remove/clear操作
        if (Object.is(getType, 4) || Object.is(getType, 5)) {
            // if 对应值为4 将执行移除指定键的操作
            if (Object.is(getType, 4)) {
                // 判断是否移除了当前键如果成功，则返回删除指定键后的全部cookie
                if (!self.RemoveCookie(key as string)) {
                    return Promise.resolve({
                        message: `删除成功！`,
                        code: 1,
                        data: self.GetallCookie()
                    })
                }
            }
            // if 对应值为5 将执行移除所有键的操作！！！
            if (Object.is(getType, 5)) {
                // 如果清空之后的结果为空，则表示删除成功
                if (self.ClearCookie() == '') {
                    return Promise.resolve({
                        message: `清空cookie成功！`,
                        code: 1,
                        data: self.GetallCookie()
                    })
                }
            }
            // 删除操作有问题就会返回删除失败
            return Promise.reject({
                message: `删除失败！`,
                code: 0,
                data: []
            })
        }
        //  if  对应值为3将执行set操作
        if (Object.is(getType, 3)) {
            // 判断是否设置成功，如果成功则返回所有的mapCookie
            if (self.SetCookie(key as string, value, day)) {
                return Promise.resolve({
                    message: `设置成功！`,
                    code: 1,
                    data: self.GetallCookie()
                })
            }
            // 设置失败
            return Promise.reject({
                message: `设置失败！`,
                code: 0,
                data: []
            })
        }
        // 参数问题，或其他问题，会触发此操作，并提示用户该如何操作
        return Promise.reject({
            message: `操作失败！`,
            code: 0,
            info: {
                type: `type:string（可选值有{get,getall,remove,clear,set}）`,
                key: `key:string（设置键为字符串）`,
                value: `value:string（设置值为字符串）`,
                day: `day:number（设置存储时间??天）`,
                prompt: `最好使用JSON.stringify()将要存入的键值对转为字符串`
            }
        })
    }
    /**
     * @SetCookie
     * @设置cookie的方法
     * 键             值            天数
     * @key:any,value:any,day:number=1
     * */
    SetCookie(key: any, value: any, day: number = 1) {
        // 创建时间对象
        let date: Date = new Date();
        // 获取设置的天数并转为毫秒
        let days: number = day * 24 * 60 * 60 * 1000;
        // 设置当前时间加天数 即 以当前时间为起点 设置的天数
        date.setTime(date.getTime() + days);
        // 用于设置cookie的键值对 key=value
        let keyValue: string = `${key}=${value}`;
        // 用于设置cookie的过期时间 expires=(需要通过toUTCString()转为UTC格式的时间戳)
        let expires: string = `expires=${date.toUTCString()}`;
        // 用于设置cookie的path参数 path=/
        let path: string = `path=/`;
        // 将上面的三个值存入数组
        const cookieSetArray: Array<string> = [keyValue, expires, path];
        // 给cookie设置上方数组中的信息
        window.document.cookie = cookieSetArray.join(';').trim();
        // 判断是否设置成功 条件 设置的当前的值是否存在
        return this.GetCookie(key) == value;
    }
    /**
     * @GetCookie
     * @获取cookie中指定键的值
     * */
    GetCookie(key: any) {
        return this.GetallCookie().get(key);
    }
    /**
     * @RemoveCookie
     * @删除cookie中指定键的值
     * */
    RemoveCookie(key: any) {
        this.SetCookie(key, this.GetCookie(key), -1);
        return this.GetallCookie().has(key);
    }
    /**
     * @ClearCookie
     * @清空cookie 慎用！！！
     * */
    ClearCookie() {
        for (let [key, value] of this.GetallCookie()) {
            this.SetCookie(key, '', -1);
        }
        return window.document.cookie;
    }
    /**
     * @GetallCookie
     * @获取全部的cookie键
     * @返回Map结构的cookie键值对
     * */
    GetallCookie(): Map<string, string> {
        return new Map(Array.from(window.document.cookie.split(";"), _ => _.trim().split('=')) as [])
    }
    /**
     * @IndexedDB
     * @IndexedDB数据库操作
     * */
    IndexedDB() {
        type CreateDatabase = {
            // 数据库名称
            databaseName: string,
            // 版本号
            version: number,
            // 创建对象仓库的名称（一个数组）
            CreateObjectStoreNames: Array<string>,
            // 创建对象仓库的索引（一个数组）
            CreateObjectStoreIndex: Array<CreateObjectStoreIndex>,
            // 主键名称
            keyPath: string,
            // 是否自动生成主键
            autoIncrement: boolean
        }
        type CreateObjectStoreIndex = {
            // 要创建的索引的名称。请注意，可以使用空名称创建索引。
            indexName: string,
            // 要使用的索引的关键路径。请注意，可以使用空创建索引keyPath，也可以将序列（数组）作为 keyPath.
            keyPath: string,
            // 可以包含以下属性的对象：
            /*
                ①unique
                如果为 true，则索引将不允许单个键的重复值。
                ②multiEntry
                如果，则当解析为true数组时，索引将为每个数组元素在索引中添加一个条目。keyPath如果false，它将添加一个包含该数组的条目。
                ③locale 非标
                目前仅限 Firefox (43+)，这允许您为索引指定区域设置。然后，通过键范围对数据执行的任何排序操作都将遵循该语言环境的排序规则（请参阅语言环境感知排序）。您可以通过以下三种方式之一指定其值：
                        string: 包含特定语言环境代码的字符串，例如en-US，或pl。
                        auto：将使用平台默认区域设置（可能会被用户代理设置更改）。
                        nullor undefined：如果没有指定区域设置，将使用正常的 JavaScript 排序——不支持区域设置。
                        
            */
            objectParameters?: ObjectParameters
        }
        type ObjectParameters = {
            // 如果为 true，则索引将不允许单个键的重复值。
            unique?: boolean,
            //如果，则当解析为true数组时，索引将为每个数组元素在索引中添加一个条目。keyPath如果false，它将添加一个包含该数组的条目。
            multiEntry?: boolean
        }
        type CreateTransactionRequest = {
            // 
            db: IDBDatabase,
            point_store: number | string,
            mode_n: number
        }
        type ControlReturn = {
            code: number,
            message: any
        }
        abstract class AIndexedDB {
            // 创建数据库=>创建对象仓库=>创建对象仓库索引（初始化）
            abstract CreateDatabase({ databaseName, version, CreateObjectStoreNames, CreateObjectStoreIndex, keyPath, autoIncrement }: CreateDatabase): Promise<IDBDatabase>;
            abstract CreateTransactionRequest({ db, point_store, mode_n }: CreateTransactionRequest): Promise<IDBObjectStore | string>;
            abstract add(ObjectStore: Promise<IDBObjectStore>, customerData: Array<object>): Promise<ControlReturn>;
            abstract delete(ObjectStore: Promise<IDBObjectStore>, keyPath: any): Promise<ControlReturn>;
            abstract clear(ObjectStore: Promise<IDBObjectStore>): Promise<ControlReturn>;
            abstract count(ObjectStore: Promise<IDBObjectStore>): Promise<ControlReturn>;
            abstract update(ObjectStore: Promise<IDBObjectStore>, item: any, key: any): Promise<ControlReturn>;
            abstract get(ObjectStore: Promise<IDBObjectStore>, keyPath: any): Promise<ControlReturn>;
            abstract each(ObjectStore: Promise<IDBObjectStore>): Promise<ControlReturn>;
        }
        class IndexedDB extends AIndexedDB {
            // 创建数据库
            CreateDatabase({ databaseName, version, CreateObjectStoreNames, CreateObjectStoreIndex, keyPath = 'id', autoIncrement = true }: CreateDatabase): Promise<IDBDatabase> {
                return new Promise((resolve, reject) => {
                    const request = window.indexedDB.open(databaseName, version);
                    // 成功
                    function success(event: any) {
                        // 保存 IDBDataBase 接口
                        console.log('success');
                        resolve(event.target.result);
                    }
                    // 失败
                    function error(event: any) {
                        console.log('Database error:' + event.target.errorCode);
                        reject(event.target.errorCode);
                    }
                    // 需要升级
                    function upgradeneeded(event: any) {
                        // 保存 IDBDataBase 接口
                        const idb = event.target.result;
                        // 创建对象仓库
                        for (let StoreName of CreateObjectStoreNames) {
                            // 判断是否有当前的对象仓库名
                            if (!idb.objectStoreNames.contains(StoreName)) {
                                const store = idb.createObjectStore(StoreName, {
                                    keyPath: keyPath,
                                    autoIncrement: autoIncrement
                                });
                                // 创建仓库索引（表）
                                for (let { indexName, keyPath, objectParameters } of CreateObjectStoreIndex) {
                                    store.createIndex(indexName, keyPath, objectParameters)
                                }
                            }
                        }
                        function complete() {
                            console.log('对象仓库更新成功！');
                            resolve(idb);
                        };
                        function abort() {
                            console.log('对象仓库更新失败！');
                        };
                        // 监听更新事件中的业务目标是否达成
                        event.target.transaction.addEventListener('complete', complete);
                        event.target.transaction.addEventListener('abort', abort);
                        console.log('upgradeneeded')
                    }
                    request.addEventListener('success', success);
                    request.addEventListener('error', error);
                    request.addEventListener('upgradeneeded', upgradeneeded);
                })
            }
            // 创建业务请求对象
            CreateTransactionRequest({ db, point_store, mode_n = 0 }: CreateTransactionRequest): Promise<IDBObjectStore | string> {
                return new Promise(resolve => {
                    // readonly，只读。readwrite，读写。versionchange，数据库版本变化。
                    const mode: Array<IDBTransactionMode> = ["readwrite", "readonly", "versionchange"];
                    const ObjectStoreNames: Array<string> = Array.from(db.objectStoreNames);
                    const transaction = db.transaction(ObjectStoreNames, mode[mode_n]);
                    const storeName: string = typeof point_store == "number" ? ObjectStoreNames[point_store] : point_store;
                    transaction.oncomplete = function (event: any) {
                        console.log("transationsRequest 完成!");
                    };
                    transaction.onerror = function () {
                        console.log("transationsRequest 失败!");
                    };
                    resolve(transaction.objectStore(storeName))
                })
            }
            // 添加数据
            async add(ObjectStore: Promise<IDBObjectStore>, customerData: Array<object>): Promise<ControlReturn> {
                const addRequest = await ObjectStore;
                return new Promise((resolve, reject) => {
                    for (let data of customerData) {
                        const requestAdd = addRequest.add(data);
                        requestAdd.onsuccess = function () {
                            console.log(data, '添加数据成功~~~')
                            resolve({ code: 1, message: '数据添加成功~~' });
                        }
                        requestAdd.onerror = function () {
                            console.log('添加数据失败~~~');
                            reject({ code: 0, message: '数据添加失败~~' });
                        }
                    }
                });
            }
            async delete(ObjectStore: Promise<IDBObjectStore>, keyPath: any): Promise<ControlReturn> {
                const delRequest = await ObjectStore;
                return new Promise((resolve, reject) => {
                    const requestDelete = delRequest.delete(keyPath);
                    requestDelete.onsuccess = function () {
                        console.log('删除数据成功~~~');
                        resolve({ code: 1, message: '数据已删除~~' })
                    }
                    requestDelete.onerror = function () {
                        console.log('删除数据失败~~~')
                        reject({ code: 0, message: '删除失败~~' })
                    }
                })
            }
            async update(ObjectStore: Promise<IDBObjectStore>, item: any): Promise<ControlReturn> {
                const updateRequest = await ObjectStore;
                return new Promise((resolve, reject) => {
                    const requestUpdate = updateRequest.put(item);
                    requestUpdate.onsuccess = function () {
                        console.log('更新数据成功~~~');
                        resolve({ code: 1, message: '更新成功~~' })
                    }
                    requestUpdate.onerror = function () {
                        console.log('更新数据失败~~~')
                        reject({ code: 0, message: '更新失败~~' })
                    }
                })
            }
            async get(ObjectStore: Promise<IDBObjectStore>, keyPath: any): Promise<ControlReturn> {
                const getRequest = await ObjectStore;
                return new Promise((resolve, reject) => {
                    const requestGet = getRequest.get(keyPath);
                    requestGet.onsuccess = function (event: any) {
                        console.log('获取数据成功~~~');
                        resolve({ code: 1, message: requestGet.result })
                    }
                    requestGet.onerror = function () {
                        console.log('获取数据失败~~~')
                        reject({ code: 0, message: '获取失败~~' })
                    }
                })
            }
            async clear(ObjectStore: Promise<IDBObjectStore>): Promise<ControlReturn> {
                const clearRequest = await ObjectStore;
                return new Promise((resolve, reject) => {
                    const requestClear = clearRequest.clear();
                    requestClear.onsuccess = function (event: any) {
                        console.log('清空指定对象仓库数据成功~~~');
                        resolve({ code: 1, message: '数据已清空~~' })
                    }
                    requestClear.onerror = function () {
                        console.log('清空指定对象仓库数据失败~~~')
                        reject({ code: 0, message: '清空失败~~' })
                    }
                })
            }
            async count(ObjectStore: Promise<IDBObjectStore>): Promise<ControlReturn> {
                const countRequest = await ObjectStore;
                return new Promise((resolve, reject) => {
                    const requestCount = countRequest.count();
                    requestCount.onsuccess = function () {
                        console.log('获取数据长度成功~~')
                        resolve({ code: 1, message: requestCount.result })
                    }
                    requestCount.onerror = function () {
                        console.log('获取数据长度失败~~')
                        reject({ code: 0, message: '获取数据长度失败~~' })
                    }
                })
            }
            async each(ObjectStore: Promise<IDBObjectStore>): Promise<ControlReturn> {
                const eachRequest = await ObjectStore;
                return new Promise((resolve, reject) => {
                    const cursorArr: any = [];
                    const cursor = eachRequest.openCursor()
                    cursor.onsuccess = function (event: any) {
                        var cursor = event.target.result;
                        if (cursor) {
                            cursorArr.push(cursor.value)
                            cursor.continue();
                        } else {
                            resolve({ code: 1, message: cursorArr })
                            console.log('遍历成功~~');
                        }
                    }
                    cursor.onerror = function () {
                        resolve({ code: 0, message: '遍历失败~~' })
                    }
                })
            }

        }
        return Promise.resolve(IndexedDB);
    }

}
/*__________________________________________________________________________________________
__________________________________________________________________________________________*/
/**
 * @OverWrite
 * @重写方法及实现原理
 * */
class OverWrite {
    //es5构造函数 new操作符的实现
    newImplement(...arg: Array<unknown>): object {
        // 1、创建一个空的对象
        const O: object = new Object();
        // 2、获得构造函数，同时删除 arguments 中第一个参数
        const F: Function = [].shift.call(arg)!;
        // 3、链接到原型，O 可以访问构造函数原型中的属性
        Object.setPrototypeOf(O, F.prototype);
        // 4、绑定 this 实现继承，O 可以访问到构造函数中的属性
        const R = F.apply(O, arg);
        // 5、优先返回构造函数返回的对象
        return R instanceof Object ? R : O;
    }
}
/*__________________________________________________________________________________________

__________________________________________________________________________________________*/
/**
 * @TimeOperation
 * @时间操作类
 * */
class TimeOperation {

}

/*__________________________________________________________________________________________
__________________________________________________________________________________________*/
/**
 * @HttpRequest
 * @http请求类
 * */
class HttpRequest {
    AxiosRequest() {
        type BaseURLO = {
            development?: string,
            test?: string,
            production?: string
        }
        type TransformRequest = {
            wether: boolean,
            callback?: Function
        }
        type AXIOS = {
            // axios对象
            axios: any,
            // 程序对象
            process: any,
            // baseURL公共的接口路径{development:开发环境，test：测试环境，production：生产环境}
            baseURL?: BaseURLO,
            // 设置超时时间
            timeout?: number,
            // 跨域是否允许携带凭证
            withCredentials?: boolean,
            // 设置请求头
            headers?: Array<string>,
            // post请求主体参数是否以xxx=xxx&xx=x格式
            transformRequest?: TransformRequest
            // 请求拦截器
            requestConfig: Function,
            requestError: Function,
            // 响应拦截器
            responseSuccess: Function,
            responseError: Function
        }
        type Request = {
            method: string,
            url: string,
            params: object,
            successState?: Function,
            errorState?: Function
        }
        class AxiosApi {
            public axios: any;
            constructor({
                requestConfig,
                requestError,
                responseSuccess,
                responseError,
                axios,
                process,
                baseURL,
                timeout = 5000,
                withCredentials = false,
                headers = ['Content-Type', 'application/x-www-form-urlencoded'],
                transformRequest = { wether: false } }: AXIOS) {
                this.axios = axios;
                /**
                 * 根据环境变量区分接口默认地址
                 * package.json scripts
                 *  "serve:test": "set NODE_ENV=test&&vue-cli-service serve",
                 *  "serve:production": "set NODE_ENV=production&&=vue-cli-service serve",
                */
                switch (process) {
                    case "development":
                        this.axios.defaults.baseURL = baseURL?.development;
                        break;
                    case "production":
                        this.axios.defaults.baseURL = baseURL?.production;
                        break;
                    case "test":
                        this.axios.defaults.baseURL = baseURL?.test;
                        break;
                }
                // timeout超时时间默认5000毫秒
                this.axios.defaults.timeout = timeout;
                // withCredentials跨域是否允许携带凭证默认false
                this.axios.defaults.withCredentials = withCredentials;
                // 设置请求头
                this.axios.defaults.headers[headers[0]] = headers[1];
                //设置post请求时是否更改为xxx=xxx&xx=x格式 通过qs.stringify(data)
                if (transformRequest.wether) {
                    this.axios.defaults.transformRequest = transformRequest.callback;
                }
                this.axios.interceptors.request.use((config: any) => {
                    return requestConfig(config);
                }, (error: any) => {
                    return requestError(error);
                });
                this.axios.interceptors.response.use((response: any) => {
                    return responseSuccess(response);
                }, (error: any) => {
                    return responseError(error);
                });
            }
            request({
                method,
                url,
                params,
                successState,
                errorState
            }: Request) {
                const httpDefault = {
                    method: method,
                    url: url,
                    // `params` 是即将与请求一起发送的 URL 参数
                    // `data` 是作为请求主体被发送的数据
                    params: method === 'GET' ? params : null,
                    data: method === 'POST' || method === 'PUT' || method === 'DELETE' ? params : null,
                }
                // console.log(httpDefault, '---------------------------')
                return new Promise((resolve, reject) => {
                    this.axios(httpDefault)
                        // 此处的.then属于axios
                        .then((res: any) => {
                            successState && successState(res)
                            resolve(res)
                        }).catch((response: any) => {
                            errorState && errorState(response)
                            reject(response)
                        })
                })
            }
        }
        return AxiosApi;
    }
}
/*__________________________________________________________________________________________
__________________________________________________________________________________________*/

// 1-创建混合类实例
const mixin = Reflect.construct(Mixin, []);
// 2-使用混合类方法将所需类混合
const mixinsOrigin = mixin.MIX(
    OriginTools,
    DomManipulation,
    StorageControl,
    OverWrite,
    TimeOperation,
    HttpRequest);
// 3-WXY类继承混合后的类
class WXY extends mixinsOrigin { }
// 4-创建wxy实例
export const wxy: any = Reflect.construct(WXY, [])
// 5-通过原型测试混合类中的方法
// console.log(wxy.IsCardID('130922199909112811'))
// wxy.VTOVSlow({
//     value: 0,
//     toValue: 100000,
//     callback(val: number) {
//         console.log(val)
//     }
// })
async function cookieControl() {
    try {
        let set = await wxy.cookie({
            type: 'clear',
        })
        console.log(set)
    } catch (error) {
        console.log(error)
    }
}
async function IndexedDBControl() {
    const IndexedDB = await wxy.IndexedDB();
    const db = new IndexedDB();
    // 1-创建数据库
    const idb = await db.CreateDatabase({
        databaseName: 'person',
        version: 5,
        CreateObjectStoreNames: [
            "a", "b"
        ],
        CreateObjectStoreIndex: [
            {
                indexName: "name1",
                keyPath: "name1",
                objectParameters: {
                    unique: false
                }
            }, {
                indexName: "name",
                keyPath: "name",
                objectParameters: {
                    unique: false
                }
            }, {
                indexName: "age",
                keyPath: "age",
                objectParameters: {
                    unique: false
                }
            }, {
                indexName: "phone",
                keyPath: "phone",
                objectParameters: {
                    unique: true
                }
            },
        ]
    })
    // 2-创建业务请求对象 给a仓库添加数据
    const objectStore = await db.CreateTransactionRequest({
        db: idb,
        point_store: 'a'
    });
    // 添加数据
    // db.add(objectStore, [
    //     { name: '真名g', name1: "笔名g", age: 18, phone: '12' },
    //     { name: '真名g1', name1: "笔名g1", age: 18, phone: '122' },
    //     { name: '真名g2', name1: "笔名g2", age: 18, phone: '132' },
    //     { name: '真名g3', name1: "笔名g2", age: 18, phone: '142' },
    //     { name: '真名g4', name1: "笔名g4", age: 18, phone: '152' },
    // ])
    // 删除数据
    // db.delete(objectStore, 3);
    // 清空数据
    // db.clear(objectStore)
    // 查询数据条数
    let count = await db.count(objectStore);
    console.log(count)
    let get = await db.get(objectStore, 1);
    console.log(get)
    let update = await db.update(objectStore, { name: '真名g434', name1: '笔名g', age: 18, phone: '12', id: 1 })
    console.log(update)
    let each = await db.each(objectStore);
    console.log(each)
}
// IndexedDBControl()
const obj = {
    a: 1,
    b: [1, 2, 3, 4],
    c: {
        m: 1
    },
    fn() {
        return 1
    },
    n: null,
    sy: Symbol(1),
    u: undefined

}
// const obj2 = wxy.DeepClone(obj, {});
// obj2.a = 2;
// obj2.b[0] = 123;
// console.log(obj, obj2);



//-----------------------Axios调用---------------------------------------------
// import axios from 'axios';
// import { wxy } from '../utils/wxy'

// const axiosApi = wxy.AxiosRequest();
// const http = new axiosApi({
//     axios: axios,
//     // npm i --save-dev @types/node
//     process: import.meta.env.MODE,
//     baseURL: {
//         development: 'https://www.fastmock.site/mock/bf1fcb3c2e2945669c2c8d0ecb8009b8/api/',
//     },
//     timeout: 5000,
//     headers: ['Content-Type', 'application/json;charset=utf-8'],
//     requestConfig(config: any) {
//         config.headers = config.headers || {};
//         if (localStorage.getItem('token')) {
//             config.headers.token = localStorage.getItem('token') || '';
//         }
//         return config;
//     },
//     requestError(error: any) {
//         return Promise.reject(error);
//     },
//     responseSuccess(response: any) {
//         return response.data;
//     },
//     responseError(error: any) {
//         let { response } = error;
//         if (response) {
//             //服务器最起码返回结果了
//             switch (response.status) {
//                 case 401://当前请求需要用户验证（未登录）--权限
//                     // 模态框提示操作或者跳转路由
//                     alert(401);
//                     break;
//                 case 403://token过期了  --服务器拒绝执行
//                     alert(403)
//                     break;
//                 case 404://找不到页面
//                     alert(404)
//                     break;
//             }
//         } else {
//             //服务器连结果都没有返回
//             if (!window.navigator.onLine) {
//                 //断网处理：可以跳转到断网页面
//                 return;
//             }
//             return Promise.reject(error);
//         }
//     }
// });
// export default {
//     getAxios: (url: string, params?: object) => http.request({
//         method: 'GET', url, params
//     }),
//     postAxios: (url: string, params?: object) => http.request({
//         method: 'POST', url, params
//     }),
//     putAxios: (url: string, params?: object) => http.request({
//         method: 'PUT', url, params
//     }),
//     deleteAxios: (url: string, params?: object) => http.request({
//         method: 'DELETE', url, params
//     }),
//     defineAxios: (
//         method: string,
//         url: string,
//         params?: object,
//         successState?: Function,
//         errorState?: Function
//     ) => http.request({
//         method,
//         url,
//         params,
//         successState,
//         errorState
//     }),
// }


// ------------------------------------------------------------------------







