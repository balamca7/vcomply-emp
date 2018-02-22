import { TestBed, async, inject } from '@angular/core/testing';

import { HrauthGuard } from './hrauth.guard';

describe('HrauthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HrauthGuard]
    });
  });

  it('should ...', inject([HrauthGuard], (guard: HrauthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
