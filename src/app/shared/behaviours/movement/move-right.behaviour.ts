import {Behaviour} from '../behaviour';
import {Boid} from '../../model/boid.model';

export class MoveRightBehaviour implements Behaviour {

  id: string = "mrb001";
  executeWithPayload(payload: Boid): void {
    console.log('MoveRightBehaviour');
    if (payload.position.x > 100) {
      payload.position.x = 0;
    } else {
      payload.position.x += Math.floor(payload.velocity.x);
    }

  }
}
