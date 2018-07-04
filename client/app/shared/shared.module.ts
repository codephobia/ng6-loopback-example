import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
        SnackBarComponent,
        PaginationComponent,
    ],
    exports: [
        SnackBarComponent,
        PaginationComponent,
    ]
})
export class SharedModule { }
