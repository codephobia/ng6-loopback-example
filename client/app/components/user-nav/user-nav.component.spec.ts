import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { MatMenuModule, MatSnackBarModule } from '@angular/material';

import { SDKBrowserModule } from '@lbservices';
import { UserNavComponent } from './user-nav.component';

describe('UserNavComponent', () => {
  let component: UserNavComponent;
  let fixture: ComponentFixture<UserNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            RouterTestingModule,
            SDKBrowserModule.forRoot(),
            MatMenuModule,
            MatSnackBarModule
        ],
        declarations: [ UserNavComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
