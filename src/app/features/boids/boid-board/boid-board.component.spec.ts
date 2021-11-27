import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoidBoardComponent } from './boid-board.component';

describe('BoidBoardComponent', () => {
  let component: BoidBoardComponent;
  let fixture: ComponentFixture<BoidBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoidBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoidBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
