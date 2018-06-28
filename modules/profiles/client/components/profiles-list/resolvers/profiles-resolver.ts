import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserApi as UserService } from '@lbservices';
import { profilesPerPage } from './profies-resolver-settings';

@Injectable()
export class ProfilesResolver implements Resolve<UserService> {
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
