// TODO: fix unit tests
import { TestBed, inject } from '@angular/core/testing';

import { PaginationService } from './pagination.service';

describe('PaginationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
            { provide: PaginationService, useValue: new PaginationService({}, () => {}) }
        ]
    });
  });

  it('should be created', inject([PaginationService], (service: PaginationService) => {
    expect(service).toBeTruthy();
  }));
});
