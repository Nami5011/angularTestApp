import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryServiceInfoComponent } from './delivery-service-info.component';

describe('DeliveryServiceInfoComponent', () => {
  let component: DeliveryServiceInfoComponent;
  let fixture: ComponentFixture<DeliveryServiceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryServiceInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryServiceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
