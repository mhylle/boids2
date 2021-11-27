import { TestBed } from '@angular/core/testing';

import { BoidService } from './boid.service';

describe('BoidService', () => {
  let service: BoidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
