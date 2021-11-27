import {Gene} from "./gene.model";

export interface Chromosome {
  id: string;
  genes: Gene[];
}
