import {Behaviour} from '../behaviour';
import {Boid} from '../../model/boid.model';


export class MoveLeftBehaviour implements Behaviour {

  id: string = "mlb001";
  executeWithPayload(payload: Boid): void {
    console.log('MoveLeftBehaviour');
    if (payload.position.x < 0) {
      payload.position.x = 100;
    } else {
      payload.position.x -= Math.floor(payload.velocity.x);
    }

  }
}
