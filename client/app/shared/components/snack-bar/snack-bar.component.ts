import { Component, OnInit } from '@angular/core';
import { MatSnackBarRef } from '@angular/material';

@Component({
  selector: '.app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent {
    public snackBarRef: MatSnackBarRef<SnackBarComponent>;
    public static message: string;
    public static action: string;

    dismiss(): void {
        this.snackBarRef.dismiss();
    }

    get hasAction(): boolean {
        return !!SnackBarComponent.action;
    }

    getMessage() {
        return SnackBarComponent.message;
    }

    getAction() {
        return SnackBarComponent.action;
    }

    constructor() {}
}
