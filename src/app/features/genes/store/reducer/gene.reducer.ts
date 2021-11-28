import {Action, createReducer, on} from '@ngrx/store';
import * as GeneActions from '../action/gene.actions';
import {Gene} from '../../../../shared/model/gene.model';

export const GeneFeatureKey = 'Gene';

export interface GeneState {
  Genes: Gene[]
}

export const initialState: GeneState = {
  Genes: []
};

export const geneReducer = createReducer(
  initialState,
  on(GeneActions.loadGenesSuccess, (state: GeneState, {genes}) => ({...state, genes})),
);

export function reducer(state: GeneState | undefined, action: Action): any {
  return reducer(state, action);
}
