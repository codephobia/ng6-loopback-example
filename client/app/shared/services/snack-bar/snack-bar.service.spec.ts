import { TestBed, inject } from '@angular/core/testing';

import { MatSnackBarModule } from '@angular/material';
import { SnackBarService } from './snack-bar.service';

describe('SnackBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule
      ],
      providers: [
        SnackBarService
      ]
    });
  });

  it('should be created', inject([SnackBarService], (service: SnackBarService) => {
    expect(service).toBeTruthy();
  }));
});
