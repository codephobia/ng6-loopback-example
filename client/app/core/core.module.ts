import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule
} from '@angular/material';
import { SnackBarComponent } from '@app/shared/components/snack-bar/snack-bar.component';
import { SDKBrowserModule } from '@lbservices';

import {
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    UserNavComponent,
    NotFoundComponent,
 } from '@app/core';

import { AppRoutingModule } from '@app/app-routing.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  entryComponents: [
      SnackBarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SDKBrowserModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SignupComponent,
    NotFoundComponent,
    UserNavComponent,
    LoginComponent,
  ],
  exports: [
    AppRoutingModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    HeaderComponent,
    FooterComponent
  ],
  providers: []
})
export class CoreModule { }
