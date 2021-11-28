import {Gene} from '../../model/gene.model';
import {MoveLeftBehaviour} from '../../behaviours/movement/move-left.behaviour';
import {UUID} from 'angular2-uuid';
import {MoveDownBehaviour} from '../../behaviours/movement/move-down.behaviour';

export class MoveDownGene implements Gene {
  behaviour = new MoveDownBehaviour();
  id = "1";
}
