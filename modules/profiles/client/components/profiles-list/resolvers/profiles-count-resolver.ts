import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserApi as UserService } from '@lbservices';

@Injectable()
export class ProfilesCountResolver implements Resolve<UserService> {
    constructor(
        protected user: UserService
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return this.getCount(route, state);
    }

    getCount(route, state) {
        return this.user.count({
            where: {},
        });
    }
}
