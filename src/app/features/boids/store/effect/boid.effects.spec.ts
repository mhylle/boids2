import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BoidEffects } from './boid.effects';

describe('BoidEffects', () => {
  let actions$: Observable<any>;
  let effects: BoidEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BoidEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(BoidEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
