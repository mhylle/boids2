import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GeneEffects } from './gene.effects';

describe('BoidEffects', () => {
  let actions$: Observable<any>;
  let effects: GeneEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GeneEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(GeneEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
