interface USER<T> {
    profile: {
        account: T
        avatar: T
        id: T
        mobile: T
        nickname: T
        token: T
    }
    redirectUrl: string
}
export type { USER }