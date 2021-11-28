import {Component, OnInit} from '@angular/core';
import {GeneService} from '../../../shared/services/gene.service';
import {Gene} from '../../../shared/model/gene.model';
import {UUID} from 'angular2-uuid';
import {MoveLeftBehaviour} from '../../../shared/behaviours/movement/move-left.behaviour';
import {MoveDownBehaviour} from '../../../shared/behaviours/movement/move-down.behaviour';
import {MoveUpBehaviour} from '../../../shared/behaviours/movement/move-up.behaviour';
import {MoveRightBehaviour} from '../../../shared/behaviours/movement/move-right.behaviour';
import * as fromGenes from '../store/reducer/gene.reducer';
import {Store} from '@ngrx/store';
import {LoadGenes} from '../store/action/gene.actions';

@Component({
  selector: 'app-gene-admin',
  templateUrl: './gene-admin.component.html',
  styleUrls: ['./gene-admin.component.css']
})
export class GeneAdminComponent implements OnInit {

  constructor(private geneService: GeneService, private store: Store<fromGenes.GeneState>) {
  }

  ngOnInit(): void {
  }

  createGene() {
    const geneu: Gene = {
      id: UUID.UUID(),
      behaviour: new MoveUpBehaviour()
    }
    this.geneService.createGene(geneu);
    const gened: Gene = {
      id: UUID.UUID(),
      behaviour: new MoveDownBehaviour()
    }
    this.geneService.createGene(gened);
    const genel: Gene = {
      id: UUID.UUID(),
      behaviour: new MoveLeftBehaviour()
    }
    this.geneService.createGene(genel);
    const gener: Gene = {
      id: UUID.UUID(),
      behaviour: new MoveRightBehaviour()
    }
    this.geneService.createGene(gener);

  }

  loadGenes() {
    this.store.dispatch(LoadGenes())
  }
}
