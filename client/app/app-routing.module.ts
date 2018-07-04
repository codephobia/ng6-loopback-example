import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import {
    HomeRoutes,
    HomeProviders,
    LoginRoutes,
    LoginProviders,
    SignupRoutes,
    SignupProviders,
    NotFoundRoutes,
    NotFoundProviders
} from '@app/core';
import { ProfilesModuleRoute } from '@modules/profiles/client/profiles.module.route';

const routes: Routes = [
    // core routes
    ...HomeRoutes,
    ...LoginRoutes,
    ...SignupRoutes,
    // module routes
    ...ProfilesModuleRoute,
    // 404 routes
    ...NotFoundRoutes,
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(
        routes,
        {
            preloadingStrategy: PreloadAllModules,
            onSameUrlNavigation: 'reload'
        }
    )],
    providers: [
        ...HomeProviders,
        ...LoginProviders,
        ...SignupProviders,
        ...NotFoundProviders,
        ...NotFoundProviders,
    ],
})
export class AppRoutingModule { }
