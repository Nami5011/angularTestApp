import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingParcelsComponent } from './tracking-parcels.component';

describe('TrackingParcelsComponent', () => {
  let component: TrackingParcelsComponent;
  let fixture: ComponentFixture<TrackingParcelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingParcelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingParcelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
