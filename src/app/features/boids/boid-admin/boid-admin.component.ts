import {Component, OnInit} from '@angular/core';
import {BoidService} from "../../../shared/services/boid.service";
import {Store} from '@ngrx/store';
import * as fromBoids from '../store/reducer/boid.reducer';
import {LoadBoids} from '../store/action/boid.actions';

@Component({
  selector: 'app-boid-admin',
  templateUrl: './boid-admin.component.html',
  styleUrls: ['./boid-admin.component.css']
})
export class BoidAdminComponent implements OnInit {

  constructor(private store: Store<fromBoids.BoidState>, private boidService: BoidService) { }

  ngOnInit(): void {
  }

  createBoids() {
    this.boidService.createBoids().subscribe()
  }

  loadBoids() {
    this.store.dispatch(LoadBoids());
  }
}
