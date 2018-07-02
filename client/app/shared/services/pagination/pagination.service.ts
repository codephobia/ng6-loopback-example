import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs/observable/forkJoin';

import { LoopBackFilter } from '@lbservices';
import { PaginationOptions, PaginationCallback } from './pagination.types';

export class PaginationService {
    page: number;
    perpage: number;
    total: number;
    showNumbers: boolean;
    showPageless: boolean;
    callback: PaginationCallback;
    loading: boolean = false;

    constructor() {}

    init(options: PaginationOptions, callback: PaginationCallback): void {
        this.page = options.page || 1;
        this.perpage = options.perpage || 25;
        this.total = options.total || 0;
        this.showNumbers = (options.showNumbers !== undefined) ? options.showNumbers : true;
        this.showPageless = (options.showPageless !== undefined) ? options.showPageless : false;
        this.callback = callback;
    }

    finalize(newTotal: number): void {
        this.loading = false;
        this.total = newTotal;
    }

    isLoading(): boolean {
        return this.loading;
    }

    setPage(page): void {
        this.page = page;
        this.loading = true;

        this.callback(this.page, this.perpage);
    }

    getPage(): number {
        return this.page;
    }

    getPerPage(): number {
        return this.perpage;
    }

    setTotal(total: number): void {
        this.total = total;
    }

    getTotal(): number {
        return this.total;
    }

    pagesArray(): number[] {
        var pages: number[] = [];
        var totalPages: number = this.totalPages();
        var start: number = 1;
        var end: number = totalPages;

        if (!this.showNumbers) {
            return [];
        }

        if (end > 5) {
            if (this.page < 3) {
                start = 1;
                end = start + 4;
            } else if (this.page > totalPages - 2) {
                end = totalPages;
                start = end - 4;
            } else {
                start = this.page - 2;
                end = this.page + 2;
            }
        }

        for (let i: number = start; i <= end; i++) {
            pages.push(i);
        }

        return pages;
    }

    isPage(page: number): boolean {
        return (this.page === page);
    }

    totalPages(): number {
        return (this.total > 0) ? Math.ceil(this.total / this.perpage) : 0;
    }

    from(): number {
        return (this.page * this.perpage) - this.perpage + 1;
    }

    to(): number {
        return ((this.page * this.perpage) > this.total) ? this.total : this.page * this.perpage;
    }

    update(
        service: any,
        serviceFind: string = 'find',
        serviceCount: string = 'count',
        findFilter?: LoopBackFilter,
        countFilter?: LoopBackFilter,
    ): Observable<any> {
        return forkJoin(
            service[serviceFind](findFilter || {}),
            service[serviceCount](countFilter || {}),
            (profiles, count) => {
                this.finalize(count.count);

                return {
                    profiles: profiles,
                    count: count.count,
                };
            }
        );
    }
}
