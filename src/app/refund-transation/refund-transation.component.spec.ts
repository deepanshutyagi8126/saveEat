import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundTransationComponent } from './refund-transation.component';

describe('RefundTransationComponent', () => {
  let component: RefundTransationComponent;
  let fixture: ComponentFixture<RefundTransationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundTransationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundTransationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
