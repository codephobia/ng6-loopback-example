import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilesOutletComponent } from './components/profiles-outlet/profiles-outlet.component';
import { ProfilesListComponent } from './components/profiles-list/profiles-list.component';
import { ProfileRoutes, ProfileProviders } from './components/profile/profile.routes';

const routes: Routes = [
    {
        path: '',
        component: ProfilesOutletComponent,
        children: [
            { path: '', component: ProfilesListComponent },
            ...ProfileRoutes,
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [...ProfileProviders]
})
export class ProfilesRoutingModule { }
