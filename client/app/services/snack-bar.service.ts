import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Injectable()
export class SnackBarService {
    snackBarRef: any;

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
