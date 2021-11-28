import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneAdminComponent } from './gene-admin.component';

describe('GeneAdminComponent', () => {
  let component: GeneAdminComponent;
  let fixture: ComponentFixture<GeneAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
