import { finalize } from 'rxjs/operators';
import { Injectable, Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { UserApi as UserService } from '../lbservices';
import { SnackBarService } from '../services/snack-bar.service';

@Component({
    selector: '.app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [
        UserService,
        SnackBarService,
    ],
})
export class LoginComponent {
    private loading: boolean = false;
    private username: string;
    private password: string;

    constructor(
        protected user: UserService,
        private router: Router,
        private snackbar: SnackBarService
    ) {}

    onLogin() {
        this.loading = true;

        this.user.login({
                username: this.username,
                password: this.password
            })
            .pipe(
                finalize(() => {
                    this.loading = false;
                })
            )
            .subscribe(
                res => {},
                data => {
                    let errMsg: string = data.message || 'Unknown Error';
                    this.snackbar.notify(errMsg, ['error']);
                    console.error('err: ', data);
                },
                () => {
                    this.router.navigate(['/']);
                    this.snackbar.notify('Login successful', ['success']);
                }
            );
    }
}


@Injectable()
export class CanActivateLogin implements CanActivate {
    constructor(private user: UserService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return !this.user.isAuthenticated();
    }
}
