import { Component, OnInit } from '@angular/core';
import {BoidService} from "../../../shared/services/boid.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-boid',
  templateUrl: './boid.component.html',
  styleUrls: ['./boid.component.css']
})
export class BoidComponent implements OnInit {
  result: Observable<Object> | undefined;

  constructor(private boidService: BoidService) { }

  ngOnInit(): void {
  }

  createBoids() {
    this.result = this.boidService.createBoids()
  }
}
