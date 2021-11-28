import {Component, OnInit} from '@angular/core';
import {BoidService} from '../../../shared/services/boid.service';
import {mergeMap, Observable, of} from 'rxjs';
import {Boid} from '../../../shared/model/boid.model';
import * as fromBoids from '../store/reducer/boid.reducer';
import {Store} from '@ngrx/store';
import {LoadBoids} from '../store/action/boid.actions';
import {selectBoid, selectBoids} from '../store/selector/boid.selectors';

@Component({
  selector: 'app-boid-board',
  templateUrl: './boid-board.component.html',
  styleUrls: ['./boid-board.component.css']
})
export class BoidBoardComponent implements OnInit {
  public maxX: number = 100;
  public maxY: number = 100;
  boids$: Observable<Boid[]> | undefined;

  constructor(private store: Store<fromBoids.BoidState>) {
    this.store.dispatch(LoadBoids())
  }

  ngOnInit(): void {
    this.boids$ = this.store.select(selectBoids);
  }

  getBoid(x: number, y: number): Observable<any> {
    return this.store.select(selectBoid(x, y));

  }


  updateBoids() {
    // this.boidService.updateBoids(this.boids as Boid[]);
  }
}
