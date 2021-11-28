import {Gene} from '../../model/gene.model';
import {MoveLeftBehaviour} from '../../behaviours/movement/move-left.behaviour';
import {UUID} from 'angular2-uuid';
import {MoveUpBehaviour} from '../../behaviours/movement/move-up.behaviour';

export class MoveUpGene implements Gene {
  behaviour = new MoveUpBehaviour();
  id = "4";
}
