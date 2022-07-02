import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperInfoComponent } from './shipper-info.component';

describe('ShipperInfoComponent', () => {
  let component: ShipperInfoComponent;
  let fixture: ComponentFixture<ShipperInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipperInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipperInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
