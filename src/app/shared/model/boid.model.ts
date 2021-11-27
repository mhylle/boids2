import {Genome} from "./genome.model";

export interface Boid {
  id: string;
  age: number;
  position: {
    x: number;
    y: number;
  };
  velocity: {
    x: number;
    y: number;
  };
  energy: number;
  genome: Genome;
}
