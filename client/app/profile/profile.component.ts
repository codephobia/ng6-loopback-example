import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { User, UserApi as UserService } from '../lbservices';

@Component({
    selector: '.app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    profile: User;

    constructor(
        private route: ActivatedRoute
    ) {
        this.route.data.subscribe(({ profile }) => {
            this.profile = profile;
        });
    }

    ngOnInit() {
    }

}

@Injectable()
export class CanActivateProfile implements CanActivate {
    constructor(private user: UserService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.user.isAuthenticated();
    }
}
