import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsPayoutComponent } from './restaurants-payout.component';

describe('RestaurantsPayoutComponent', () => {
  let component: RestaurantsPayoutComponent;
  let fixture: ComponentFixture<RestaurantsPayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsPayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsPayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
