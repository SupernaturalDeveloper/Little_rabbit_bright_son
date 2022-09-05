interface Path {
    path: string
}
interface Breadcrumb {
    id: number;
    path?: Path;
    text: string
}
export type { Breadcrumb }