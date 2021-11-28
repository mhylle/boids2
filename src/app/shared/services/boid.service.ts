import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Boid} from "../model/boid.model";
import {Chromosome} from "../model/chromosome.model";
import {Genome} from "../model/genome.model";
import {Gene} from "../model/gene.model";
import {UUID} from "angular2-uuid";
import {environment} from "../../../environments/environment";
import {map, Observable} from 'rxjs';
import {MoveLeftGene} from '../genes/movement/move-left.gene';
import {MoveRightGene} from '../genes/movement/move-right.gene';
import {MoveUpGene} from '../genes/movement/move-up.gene';
import {MoveDownGene} from '../genes/movement/move-down.gene';
import {GeneService} from './gene.service';

@Injectable({
  providedIn: 'root'
})
export class BoidService {
  drag: number = 0.1;

  constructor(private http: HttpClient, private geneService: GeneService) {

  }

  createBoids() {
    return this.createGenome().pipe(map(genome => {
      const boid: Boid = {
        id: UUID.UUID(),
        position: {
          x: Math.floor(Math.random() * 100),
          y: Math.floor(Math.random() * 100)
        },
        velocity: {
          x: Math.random() * 2,
          y: Math.random() * 2
        },
        age: 0,
        energy: 100,
        genome: genome

      };
      return boid;
    })).pipe(map(boid => {
      console.log('boid', boid);
      this.http.post(environment.apiUrl + '/boids', boid).subscribe()
    }))
  }

  updateBoids(boids: Boid[]) {
    for (let boid of boids) {
      boid = this.applyBehaviours(boid);
      this.update(boid);
    }
  }

  get boids(): Observable<Boid[]> {
    return this.http.get<Boid[]>(`${environment.apiUrl}/boids`).pipe(map(boids => {
      return boids;
    }));
  }

  private createGenome() {
    return this.createChromosome().pipe(map(chromosome => {
      const genome: Genome = {
        id: UUID.UUID(),
        chromosomes: [chromosome]
      };
      return genome;
    }));
  }

  private createChromosome(): Observable<Chromosome> {
    return this.createGene().pipe(map(gene => {
      const chromosome: Chromosome = {
        id: UUID.UUID(),
        genes: [gene]
      };
      return chromosome;
    }));
  }

  private createGene(): Observable<Gene> {
    let genes = this.geneService.genes;
    const geneSelection: number = Math.floor(Math.random() * 4);
    return genes.pipe(map(genes => {
      return genes[geneSelection];
    }));
  }

  private applyBehaviours(boid: Boid): Boid {
    boid.genome.chromosomes.forEach(chromosome => {
      chromosome.genes.forEach(gene => {
        const behaviour = gene.behaviour;
        if (behaviour.executeWithPayload) {
          behaviour.executeWithPayload(boid);
        }
      });
    });
    return boid
  }

  private update(boid: Boid) {
    this.http.put(`${environment.apiUrl}/boids/${boid.id}`, boid).subscribe();
  }
}
