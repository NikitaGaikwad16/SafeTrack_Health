import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalMenuComponent } from './medical-menu.component';

describe('MedicalMenuComponent', () => {
  let component: MedicalMenuComponent;
  let fixture: ComponentFixture<MedicalMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalMenuComponent]
    });
    fixture = TestBed.createComponent(MedicalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
