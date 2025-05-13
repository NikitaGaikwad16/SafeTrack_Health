import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingMenuComponent } from './billing-menu.component';

describe('BillingMenuComponent', () => {
  let component: BillingMenuComponent;
  let fixture: ComponentFixture<BillingMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillingMenuComponent]
    });
    fixture = TestBed.createComponent(BillingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
