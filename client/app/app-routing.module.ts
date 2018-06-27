import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeRoutes, HomeProviders } from '@app/components/home/home.routes';
import { LoginRoutes, LoginProviders } from '@app/components/login/login.routes';
import { SignupRoutes, SignupProviders } from '@app/components/signup/signup.routes';
import { NotFoundRoutes, NotFoundProviders } from '@app/components/not-found/not-found.routes';
import { ProfilesModuleRoute } from '@modules/profiles/client/profiles.module.route';

const routes: Routes = [
    ...HomeRoutes,
    ...LoginRoutes,
    ...SignupRoutes,
    ...ProfilesModuleRoute,
    ...NotFoundRoutes,
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(
        routes,
        { onSameUrlNavigation: 'reload' }
    )],
    providers: [
        ...HomeProviders,
        ...LoginProviders,
        ...SignupProviders,
        ...NotFoundProviders,
    ],
})
export class AppRoutingModule { }
