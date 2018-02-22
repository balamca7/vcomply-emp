import { TestBed, async, inject } from '@angular/core/testing';

import { TaxprovauthGuard } from './taxprovauth.guard';

describe('TaxprovauthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaxprovauthGuard]
    });
  });

  it('should ...', inject([TaxprovauthGuard], (guard: TaxprovauthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
