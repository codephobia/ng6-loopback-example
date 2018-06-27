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
}
