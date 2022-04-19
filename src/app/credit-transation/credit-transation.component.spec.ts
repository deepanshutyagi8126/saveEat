import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditTransationComponent } from './credit-transation.component';

describe('CreditTransationComponent', () => {
  let component: CreditTransationComponent;
  let fixture: ComponentFixture<CreditTransationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditTransationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditTransationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
