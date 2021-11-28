import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoidAdminComponent } from './boid-admin.component';

describe('BoidAdminComponent', () => {
  let component: BoidAdminComponent;
  let fixture: ComponentFixture<BoidAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoidAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoidAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
