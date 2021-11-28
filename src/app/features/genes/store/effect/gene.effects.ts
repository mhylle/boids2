import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {LoadGenes, loadGenesSuccess} from '../action/gene.actions';
import {catchError, EMPTY, map, switchMap, withLatestFrom} from 'rxjs';
import * as fromGenes from '../reducer/gene.reducer';
import {Store} from '@ngrx/store';
import {selectGenes} from '../selector/gene.selectors';
import {GeneService} from '../../../../shared/services/gene.service';

@Injectable()
export class GeneEffects {

  constructor(private actions$: Actions, private store: Store<fromGenes.GeneState>, private geneService: GeneService) {
  }

  // noinspection JSUnusedGlobalSymbols
  loadGenes$ = createEffect(() => this.actions$.pipe(
    ofType(LoadGenes),
    withLatestFrom(this.store.select(selectGenes)),
    switchMap((action) => this.geneService.genes
      .pipe(
        map(genes => loadGenesSuccess({genes})),
        catchError(() => EMPTY)
      ))));

}
