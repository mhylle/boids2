import { createAction, props } from '@ngrx/store';
import {Gene} from '../../../../shared/model/gene.model';

export const LoadGenes = createAction(
  '[Gene] Load Genes'
);

export const loadGenesSuccess = createAction(
  '[Gene] Load Genes Success',
  props<{ genes: Gene[] }>()
);

export const loadGenesFailure = createAction(
  '[Gene] Load Genes Failure',
  props<{ error: any }>()
);
