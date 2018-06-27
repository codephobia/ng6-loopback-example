import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatMenuModule, MatInputModule, MatButtonModule, MatSnackBar, MatSnackBarModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from '@app/components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SDKBrowserModule } from '@lbservices';
import { UserNavComponent } from '@app/components/user-nav/user-nav.component';
import { HomeComponent } from '@app/components/home/home.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { SignupComponent } from '@app/components/signup/signup.component';
import { NotFoundComponent } from '@app/components/not-found/not-found.component';

import { SharedModule } from '@shared/shared.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        UserNavComponent,
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        SignupComponent,
        NotFoundComponent,
      ],
      imports: [
        BrowserModule,
        RouterModule,
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
        SharedModule,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
