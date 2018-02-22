import { TestBed, inject } from '@angular/core/testing';

import { WorkpermitService } from './workpermit.service';

describe('WorkpermitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkpermitService]
    });
  });

  it('should be created', inject([WorkpermitService], (service: WorkpermitService) => {
    expect(service).toBeTruthy();
  }));
});
