import { Routes } from '@angular/router';

export const ProfilesModuleRoute: Routes = [
    {
        path: 'profiles',
        loadChildren: '../../modules/profiles/client/profiles.module#ProfilesModule'
    }
];
