import { createAction, props } from '@ngrx/store';
import {Boid} from '../../../../shared/model/boid.model';

export const LoadBoids = createAction(
  '[Boid] Load Boids'
);

export const loadBoidsSuccess = createAction(
  '[Boid] Load Boids Success',
  props<{ boids: Boid[] }>()
);

export const loadBoidsFailure = createAction(
  '[Boid] Load Boids Failure',
  props<{ error: any }>()
);
