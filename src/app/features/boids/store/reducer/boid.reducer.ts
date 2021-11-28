import {Action, createReducer, on} from '@ngrx/store';
import * as BoidActions from '../action/boid.actions';
import {Boid} from '../../../../shared/model/boid.model';
import {loadBoidsSuccess} from '../action/boid.actions';

export const boidFeatureKey = 'boid';

export interface BoidState {
  boids: Boid[]
}

export const initialState: BoidState = {
  boids: []
};

export const boidReducer = createReducer(
  initialState,
  on(BoidActions.loadBoidsSuccess, (state: BoidState, {boids}) => ({...state, boids})),
);

export function reducer(state: BoidState | undefined, action: Action): any {
  return reducer(state, action);
}
