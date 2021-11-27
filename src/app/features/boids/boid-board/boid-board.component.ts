import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boid-board',
  templateUrl: './boid-board.component.html',
  styleUrls: ['./boid-board.component.css']
})
export class BoidBoardComponent implements OnInit {
  public maxX: number = 10;
  public maxY: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
