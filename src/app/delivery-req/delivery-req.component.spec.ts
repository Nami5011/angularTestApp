import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryReqComponent } from './delivery-req.component';

describe('DeliveryReqComponent', () => {
  let component: DeliveryReqComponent;
  let fixture: ComponentFixture<DeliveryReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
