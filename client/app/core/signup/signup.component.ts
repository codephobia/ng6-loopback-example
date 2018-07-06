import { finalize } from 'rxjs/operators';
import { Component, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserApi as UserService } from '@lbservices';
import { SnackBarService } from '@shared/services/snack-bar/snack-bar.service';

@Component({
    selector: '.app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    providers: [
        UserService,
        SnackBarService,
    ],
})
export class SignupComponent {
    loading: boolean = false;
    signupForm: FormGroup;

    constructor(
        private router: Router,
        private user: UserService,
        private snackbar: SnackBarService,
        private fb: FormBuilder
    ) {
        this.createSignupForm();
    }

    private createSignupForm(): void {
        this.signupForm = this.fb.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            cpassword: ['', Validators.required],
        });
    }

    onSignup(): void {
        if (!this.signupForm.valid) {
            return;
        }

        this.loading = true;

        this.user.create({
                username: this.signupForm.get('username').value,
                email: this.signupForm.get('email').value,
                password: this.signupForm.get('password').value
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
                    this.snackbar.notify('Signup successful', ['success']);
                }
            );
    }

}

@Injectable()
export class CanActivateSignup implements CanActivate {
    constructor(private user: UserService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return !this.user.isAuthenticated();
    }
}
