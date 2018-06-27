import { Resolve, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProfilesListComponent, CanActivateProfilesList } from './profiles-list.component';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { UserApi as UserService } from '@lbservices';

export const profilesPerPage: number = 1;

@Injectable()
export class ProfilesListResolver implements Resolve<UserService> {
    constructor(
        protected user: UserService
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return this.getUsers(route, state);
    }

    getUsers(route, state) {
        let page: number = Number(route.queryParamMap.get('page')) || 1;

        return this.user.find({
            where: {},
            fields: ['username'],
            order: 'username ASC',
            limit: profilesPerPage,
            skip: (page * profilesPerPage) - profilesPerPage,
        });
    }
}

export const ProfilesListRoutes: Routes = [
    {
        path: '',
        component: ProfilesListComponent,
        canActivate: [CanActivateProfilesList],
        resolve: {
            profiles: ProfilesListResolver,
        },
        runGuardsAndResolvers: 'always',
    },
];

export const ProfilesListProviders: any[] = [
    CanActivateProfilesList,
    ProfilesListResolver,
];
