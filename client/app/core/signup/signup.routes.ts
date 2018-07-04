import { Routes } from '@angular/router';
import { SignupComponent, CanActivateSignup } from './signup.component';

export const SignupRoutes: Routes = [
    {
        path: 'signup',
        component: SignupComponent,
        canActivate: [CanActivateSignup],
    },
];

export const SignupProviders: any[] = [
    CanActivateSignup,
];
