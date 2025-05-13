import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentMenuComponent } from './appointment-menu.component';

describe('AppointmentMenuComponent', () => {
  let component: AppointmentMenuComponent;
  let fixture: ComponentFixture<AppointmentMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentMenuComponent]
    });
    fixture = TestBed.createComponent(AppointmentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
