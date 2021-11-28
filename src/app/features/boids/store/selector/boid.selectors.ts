import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromBoid from '../reducer/boid.reducer';

export const selectBoidState = createFeatureSelector<fromBoid.BoidState>(
  fromBoid.boidFeatureKey
);

export const selectBoids = createSelector(
  selectBoidState,
  (state: fromBoid.BoidState) => state.boids
);

export const selectBoid = (x: number, y: number) => createSelector(
  selectBoidState,
  (state: fromBoid.BoidState) =>
    state.boids.forEach(boid => {
      if (boid.position.x === x && boid.position.y === y) {
        return 'boid';
      }
      return '';
    })
);

