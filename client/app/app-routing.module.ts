import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeRoutes, HomeProviders } from './home/home.routes';
import { LoginRoutes, LoginProviders } from './login/login.routes';
import { SignupRoutes, SignupProviders } from './signup/signup.routes';
import { NotFoundRoutes, NotFoundProviders } from './not-found/not-found.routes';
import { ProfileRoutes, ProfileProviders } from './profile/profile.routes';

const routes: Routes = [
    ...HomeRoutes,
    ...LoginRoutes,
    ...SignupRoutes,
    ...ProfileRoutes,
    ...NotFoundRoutes,
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)],
    providers: [
        ...HomeProviders,
        ...LoginProviders,
        ...SignupProviders,
        ...ProfileProviders,
        ...NotFoundProviders,
    ],
})
export class AppRoutingModule { }
