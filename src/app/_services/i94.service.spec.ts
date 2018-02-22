import { TestBed, inject } from '@angular/core/testing';

import { I94Service } from './i94.service';

describe('I94Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [I94Service]
    });
  });

  it('should be created', inject([I94Service], (service: I94Service) => {
    expect(service).toBeTruthy();
  }));
});
