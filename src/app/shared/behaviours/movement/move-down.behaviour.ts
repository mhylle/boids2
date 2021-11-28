import {Behaviour} from '../behaviour';
import {Boid} from '../../model/boid.model';
import {UUID} from 'angular2-uuid';

export class MoveDownBehaviour implements Behaviour {

  id: string = "mdb001";

  executeWithPayload(payload: Boid): void {
    // log behaviour execution
    console.log('MoveDownBehaviour executed');
    if (payload.position.y > 100) {
      payload.position.y = 0;
    } else {
      payload.position.y += Math.floor(payload.velocity.y);
    }
  }


}
