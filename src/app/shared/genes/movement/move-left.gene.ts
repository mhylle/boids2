import {Gene} from '../../model/gene.model';
import {MoveLeftBehaviour} from '../../behaviours/movement/move-left.behaviour';

export class MoveLeftGene implements Gene {
  behaviour = new MoveLeftBehaviour();
  id = "2";
}
