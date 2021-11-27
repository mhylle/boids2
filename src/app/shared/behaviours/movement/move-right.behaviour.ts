import {Behaviour} from "./behaviour";
import {Boid} from "../model/boid.model";

export class MoveRightBehaviour implements Behaviour {

  executeWithPayload(payload: Boid): void {
    payload.position.x += payload.velocity.x;
  }
}
