import { finalize } from 'rxjs/operators';
import { Injectable, Component } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserApi as UserService } from '@lbservices';
import { SnackBarService } from '@shared/services/snack-bar/snack-bar.service';

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
    loading: boolean = false;
    loginForm: FormGroup;

    constructor(
        protected user: UserService,
        private router: Router,
        private snackbar: SnackBarService,
        private fb: FormBuilder
    ) {
        this.createLoginForm();
    }

    private createLoginForm() {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    onLogin(): void {
        // check for invalid login form
        if (!this.loginForm.valid) {
            let usernameValid = this.loginForm.get('username').valid;
            let passwordValid = this.loginForm.get('password').valid;

            if (!usernameValid && !passwordValid) {
                this.snackbar.notify('Please enter a username and password', ['error']);
            } else if (!usernameValid) {
                this.snackbar.notify('Please enter a username', ['error']);
            } else if (!passwordValid) {
                this.snackbar.notify('Please enter a password', ['error']);
            } else {
                this.snackbar.notify('An unknown error has occurred', ['error']);
            }
            return;
        }

        // set loading
        this.loading = true;

        // attempt login for user
        this.user.login({
                username: this.loginForm.get('username').value,
                password: this.loginForm.get('password').value
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
