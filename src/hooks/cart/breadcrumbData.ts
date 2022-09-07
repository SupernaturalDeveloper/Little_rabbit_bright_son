import type { Breadcrumb } from "../../interface/IBreadcrumbData"
export default function (): Array<Breadcrumb> {
    return [
        {
            id: 1,
            path: { path: '/' },
            text: '首页'
        },
        {
            id: 2,
            text: '购物车'
        }
    ]
}