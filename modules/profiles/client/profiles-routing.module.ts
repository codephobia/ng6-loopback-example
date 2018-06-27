import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilesOutletComponent } from './components/profiles-outlet/profiles-outlet.component';
import { ProfileRoutes, ProfileProviders } from './components/profile/profile.routes';
import { ProfilesListRoutes, ProfilesListProviders } from './components/profiles-list/profiles-list.routes';

const routes: Routes = [
    {
        path: '',
        component: ProfilesOutletComponent,
        children: [
            ...ProfilesListRoutes,
            ...ProfileRoutes,
        ],
        runGuardsAndResolvers: 'always',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        ...ProfilesListProviders,
        ...ProfileProviders,
    ]
})
export class ProfilesRoutingModule { }
