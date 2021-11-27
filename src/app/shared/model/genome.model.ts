import {Chromosome} from "./chromosome.model";

export interface Genome {
  id: string;
  chromosomes: Chromosome[];
}
