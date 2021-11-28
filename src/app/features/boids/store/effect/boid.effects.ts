import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {LoadBoids, loadBoidsSuccess} from '../action/boid.actions';
import {catchError, EMPTY, map, mergeMap, switchMap, withLatestFrom} from 'rxjs';
import {BoidService} from '../../../../shared/services/boid.service';
import * as fromBoids from '../reducer/boid.reducer';
import {Store} from '@ngrx/store';
import {selectBoids} from '../selector/boid.selectors';

@Injectable()
export class BoidEffects {

  constructor(private actions$: Actions, private store: Store<fromBoids.BoidState>, private boidService: BoidService) {
  }

  // noinspection JSUnusedGlobalSymbols
  loadBoids$ = createEffect(() => this.actions$.pipe(
    ofType(LoadBoids),
    withLatestFrom(this.store.select(selectBoids)),
    switchMap((action) => this.boidService.boids
      .pipe(
        map(boids => loadBoidsSuccess({boids})),
        catchError(() => EMPTY)
      ))));

}
