import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsOrderHistoryComponent } from './restaurants-order-history.component';

describe('RestaurantsOrderHistoryComponent', () => {
  let component: RestaurantsOrderHistoryComponent;
  let fixture: ComponentFixture<RestaurantsOrderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsOrderHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
