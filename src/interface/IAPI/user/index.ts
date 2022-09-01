interface IAccount {
    account: string
}
interface IPassword {
    password: string
}
interface IMobile {
    mobile: string
}
interface ICode {
    code: string
}
interface IUnionId {
    unionId: string,
}
interface ISource {
    source: number
}
interface IAccountLogin extends IAccount, IPassword { }
interface IMobileLogin extends IMobile, ICode { }
interface IQQLogin extends IUnionId, ISource { }
interface IQQBindLogin extends IUnionId, IMobile, ICode { }
interface IQQPatchLogin extends IAccountLogin, IQQBindLogin { }
export type {
    IAccount,
    IPassword,
    IMobile,
    ICode,
    IUnionId,
    ISource,
    IAccountLogin,
    IMobileLogin,
    IQQLogin,
    IQQBindLogin,
    IQQPatchLogin
}