import { Component, Input } from '@angular/core';
import { PaginationService } from '@app/shared/services/pagination/pagination.service';

@Component({
    selector: '[app-pagination]',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
    @Input() pagination: PaginationService;

    constructor() {}

    show() {
        return (this.pagination.totalPages() > 1 || this.pagination.showPageless);
    }

    prevClass(): string {
        return (this.pagination.loading) ? 'fas fa-circle-notch fa-spin' : 'fas fa-caret-left';
    }

    nextClass(): string {
        return (this.pagination.loading) ? 'fas fa-circle-notch fa-spin' : 'fas fa-caret-right';
    }

    prevDisabled(): boolean {
        return (this.pagination.page - 1 === 0);
    }

    nextDisabled(): boolean {
        return ((this.pagination.page + 1) > this.pagination.totalPages());
    }
}
