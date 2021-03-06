import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';
import { SnackBarComponent } from '@shared/components/snack-bar/snack-bar.component';

@Injectable({
    providedIn: 'root'
})
export class SnackBarService {
    snackBarRef: MatSnackBarRef<SnackBarComponent>;

    constructor(public snackBar: MatSnackBar) {}

    notify(message: string, classNames: string[]) {
        SnackBarComponent.message = message;
        SnackBarComponent.action = 'Close';
        this.snackBarRef = this.snackBar.openFromComponent(SnackBarComponent, {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'end',
            panelClass: ['app-snack-bar-container'].concat(classNames),
        });
        this.snackBarRef.instance.snackBarRef = this.snackBarRef;
    }
}
