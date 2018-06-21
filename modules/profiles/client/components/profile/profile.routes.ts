import { Resolve, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProfileComponent, CanActivateProfile } from './profile.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserApi as UserService } from '../../../../../client/app/lbservices';

@Injectable()
export class ProfileResolver implements Resolve<UserService> {
    constructor(
        protected user: UserService
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return this.user.findOne({
            where: {
                username: route.params.username
            },
            fields: ['username']
        });
    }
}

export const ProfileRoutes: Routes = [
    {
        path: ':username',
        component: ProfileComponent,
        canActivate: [CanActivateProfile],
        resolve: {
            profile: ProfileResolver,
        },
    },
];

export const ProfileProviders: any[] = [
    CanActivateProfile,
    ProfileResolver,
];
