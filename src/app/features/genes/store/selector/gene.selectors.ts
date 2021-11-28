import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGene from '../reducer/gene.reducer';

export const selectGeneState = createFeatureSelector<fromGene.GeneState>(
  fromGene.GeneFeatureKey
);

export const selectGenes = createSelector(
  selectGeneState,
  (state: fromGene.GeneState) => state.Genes
);

