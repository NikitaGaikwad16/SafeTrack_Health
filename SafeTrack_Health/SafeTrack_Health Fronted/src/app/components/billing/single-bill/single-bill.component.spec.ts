import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBillComponent } from './single-bill.component';

describe('SingleBillComponent', () => {
  let component: SingleBillComponent;
  let fixture: ComponentFixture<SingleBillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleBillComponent]
    });
    fixture = TestBed.createComponent(SingleBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
