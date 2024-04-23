import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrateEquipmentComponent } from './calibrate-equipment.component';

describe('CalibrateEquipmentComponent', () => {
  let component: CalibrateEquipmentComponent;
  let fixture: ComponentFixture<CalibrateEquipmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalibrateEquipmentComponent]
    });
    fixture = TestBed.createComponent(CalibrateEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
