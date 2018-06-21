import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeRoutes, HomeProviders } from './home/home.routes';
import { LoginRoutes, LoginProviders } from './login/login.routes';
import { SignupRoutes, SignupProviders } from './signup/signup.routes';
import { NotFoundRoutes, NotFoundProviders } from './not-found/not-found.routes';
import { ProfilesModuleRoute } from '../../modules/profiles/client/profiles.module.route';

const routes: Routes = [
    ...HomeRoutes,
    ...LoginRoutes,
    ...SignupRoutes,
    ...ProfilesModuleRoute,
    ...NotFoundRoutes,
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)],
    providers: [
        ...HomeProviders,
        ...LoginProviders,
        ...SignupProviders,
        ...NotFoundProviders,
    ],
})
export class AppRoutingModule { }
