import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePayoutComponent } from './store-payout.component';

describe('StorePayoutComponent', () => {
  let component: StorePayoutComponent;
  let fixture: ComponentFixture<StorePayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorePayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorePayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
