import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Boid} from "../model/boid.model";
import {Chromosome} from "../model/chromosome.model";
import {Genome} from "../model/genome.model";
import {Gene} from "../model/gene.model";
import {UUID} from "angular2-uuid";
import {MoveUpBehaviour} from "../behaviours/movement/move-up.behaviour";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BoidService {

  constructor(private http: HttpClient) { }

  createBoids() {
    const boid: Boid = {
      id: UUID.UUID(),
      position: {
        x: Math.random() * 100,
        y: Math.random() * 100
      },
      velocity: {
        x: Math.random() * 10,
        y: Math.random() * 10
      },
      age: 0,
      energy: 100,
      genome: this.createGenome()

    };
    return this.http.post(`${environment.apiUrl}/boids`, boid);
  }

  private createGenome() {
    const genome: Genome = {
      id: UUID.UUID(),
      chromosomes: [this.createChromosome()]
    };
    return genome;
  }

  private createChromosome(): Chromosome {
    const chromosome: Chromosome = {
      id: UUID.UUID(),
      genes: [this.createGene()]
    };
    return chromosome;
  }

  private createGene(): Gene {
    const gene: Gene = {
      id: UUID.UUID(),
      behaviour: new MoveUpBehaviour()
    };
    return gene;
  }
}
