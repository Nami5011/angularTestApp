import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryInfoMainComponent } from './delivery-info-main.component';

describe('DeliveryInfoMainComponent', () => {
  let component: DeliveryInfoMainComponent;
  let fixture: ComponentFixture<DeliveryInfoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryInfoMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryInfoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
