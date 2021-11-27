import {Behaviour} from "./behaviour";
import {Boid} from "../model/boid.model";

export class MoveDownBehaviour implements Behaviour {

  executeWithPayload(payload: Boid): void {
    payload.position.y += payload.velocity.y;
  }
}
