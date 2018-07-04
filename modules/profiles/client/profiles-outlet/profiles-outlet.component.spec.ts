import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesOutletComponent } from './profiles-outlet.component';

describe('ProfilesOutletComponent', () => {
  let component: ProfilesOutletComponent;
  let fixture: ComponentFixture<ProfilesOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilesOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
