import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MatMenuTrigger } from '@angular/material';
import { UserApi as UserService } from '../lbservices';
import { SnackBarService } from '../services/snack-bar.service';

@Component({
    selector: 'app-user-nav',
    templateUrl: './user-nav.component.html',
    styleUrls: ['./user-nav.component.scss'],
    providers: [
        UserService,
        SnackBarService,
    ],
})
export class UserNavComponent implements OnInit {

    @ViewChild(MatMenuTrigger) userMenu: MatMenuTrigger;

    constructor(
        protected user: UserService,
        protected router: Router,
        protected snackbar: SnackBarService
    ) { }

    ngOnInit() {
    }

    isMenuOpen(): boolean {
        return (this.userMenu) ? this.userMenu.menuOpen : false;
    }

    isAuthenticated(): boolean {
        return this.user.isAuthenticated();
    }

    getUsername(): string {
        return this.user.getCachedCurrent().username;
    }

    onLogout() {
        this.user.logout()
            .subscribe(
                res => {},
                err => {
                    console.error(err);
                },
                () => {
                    this.router.navigate(['/login']);
                    this.snackbar.notify('Logout successful', ['success']);
                }
            );
    }
}
