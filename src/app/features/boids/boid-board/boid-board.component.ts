import {Component, OnInit} from '@angular/core';
import {BoidService} from '../../../shared/services/boid.service';
import {mergeMap, Observable, of} from 'rxjs';
import {Boid} from '../../../shared/model/boid.model';

@Component({
  selector: 'app-boid-board',
  templateUrl: './boid-board.component.html',
  styleUrls: ['./boid-board.component.css']
})
export class BoidBoardComponent implements OnInit {
  public maxX: number = 100;
  public maxY: number = 100;
  public boids: Boid[] | undefined;

  constructor(private boidService: BoidService) {
  }

  ngOnInit(): void {
    this.boidService.boids.subscribe(boids => this.boids = boids);
  }

  getBoid(x: number, y: number): string {
    let result = '';
    if (this.boids) {
      this.boids.forEach(boid => {
        if (boid.position.x === x && boid.position.y === y) {
          result = 'boid';
        }
      });
    }
    return result;
  }


  updateBoids() {
    this.boidService.updateBoids(this.boids as Boid[]);
  }
}
