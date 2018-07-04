import { Routes } from '@angular/router';
import { ProfilesListComponent, CanActivateProfilesList } from './profiles-list.component';

import { ProfilesResolver } from './resolvers/profiles-resolver';
import { ProfilesCountResolver } from './resolvers/profiles-count-resolver';

export const ProfilesListRoutes: Routes = [
    {
        path: '',
        component: ProfilesListComponent,
        canActivate: [CanActivateProfilesList],
        resolve: {
            profiles: ProfilesResolver,
            profilesCount: ProfilesCountResolver,
        },
        runGuardsAndResolvers: 'always',
    },
];

export const ProfilesListProviders: any[] = [
    CanActivateProfilesList,
    ProfilesResolver,
    ProfilesCountResolver,
];
