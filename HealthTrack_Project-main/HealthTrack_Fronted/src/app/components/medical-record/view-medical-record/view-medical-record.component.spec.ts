import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMedicalRecordComponent } from './view-medical-record.component';

describe('ViewMedicalRecordComponent', () => {
  let component: ViewMedicalRecordComponent;
  let fixture: ComponentFixture<ViewMedicalRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMedicalRecordComponent]
    });
    fixture = TestBed.createComponent(ViewMedicalRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
