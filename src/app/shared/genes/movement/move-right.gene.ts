import {Gene} from '../../model/gene.model';
import {MoveLeftBehaviour} from '../../behaviours/movement/move-left.behaviour';
import {UUID} from 'angular2-uuid';
import {MoveRightBehaviour} from '../../behaviours/movement/move-right.behaviour';

export class MoveRightGene implements Gene {
  behaviour = new MoveRightBehaviour();
  id = "3";
}
