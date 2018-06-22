import './global-shim';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatMenuModule, MatInputModule, MatButtonModule, MatSnackBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SDKBrowserModule } from '@lbservices';
import { UserNavComponent } from './user-nav/user-nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    entryComponents: [
        SnackBarComponent,
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        UserNavComponent,
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        SnackBarComponent,
        SignupComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SDKBrowserModule.forRoot(),
        FormsModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatMenuModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
