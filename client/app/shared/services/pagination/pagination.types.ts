export interface PaginationOptions {
    page?: number;
    perpage?: number;
    total?: number;
    showNumbers?: boolean;
    showPageless?: boolean;
}

export interface PaginationCallback {
    (page: number, perpage: number): void;
}
