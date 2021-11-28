import { Component, OnInit } from '@angular/core';
import {BoidService} from "../../../shared/services/boid.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-boid-admin',
  templateUrl: './boid-admin.component.html',
  styleUrls: ['./boid-admin.component.css']
})
export class BoidAdminComponent implements OnInit {

  constructor(private boidService: BoidService) { }

  ngOnInit(): void {
  }

  createBoids() {
    this.boidService.createBoids().subscribe()
  }
}
