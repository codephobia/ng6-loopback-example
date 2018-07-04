import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MatToolbarModule, MatMenuModule, MatSnackBarModule } from '@angular/material';
import { SDKBrowserModule } from '@lbservices';

import { HeaderComponent } from './header.component';
import { UserNavComponent } from '@app/core/user-nav/user-nav.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          HeaderComponent,
          UserNavComponent
        ],
      imports: [
          RouterTestingModule,
          SDKBrowserModule.forRoot(),
          MatToolbarModule,
          MatMenuModule,
          MatSnackBarModule
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
