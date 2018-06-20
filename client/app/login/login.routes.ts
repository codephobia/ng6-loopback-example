import { Routes } from '@angular/router';
import { LoginComponent, CanActivateLogin } from './login.component';

export const LoginRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [CanActivateLogin],
    },
];

export const LoginProviders: any[] = [
    CanActivateLogin,
];
