import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

export const NotFoundRoutes: Routes = [
    {
        path: '404',
        component: NotFoundComponent,
    },
    {
        path: '**',
        redirectTo: '/404',
    },
];

export const NotFoundProviders: any[] = [
];
