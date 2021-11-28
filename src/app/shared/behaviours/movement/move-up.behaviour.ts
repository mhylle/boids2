import {Behaviour} from '../behaviour';
import {Boid} from '../../model/boid.model';

export class MoveUpBehaviour implements Behaviour {
  id: string = "mub001";

  executeWithPayload(payload: Boid): void {
    console.log('MoveUpBehaviour');
    if (payload.position.y < 0) {
      payload.position.y = 100;
    } else {
      payload.position.y -= Math.floor(payload.velocity.y);
    }

  }
}
