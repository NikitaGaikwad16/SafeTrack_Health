import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorMenuComponent } from './doctor-menu.component';

describe('DoctorMenuComponent', () => {
  let component: DoctorMenuComponent;
  let fixture: ComponentFixture<DoctorMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorMenuComponent]
    });
    fixture = TestBed.createComponent(DoctorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
