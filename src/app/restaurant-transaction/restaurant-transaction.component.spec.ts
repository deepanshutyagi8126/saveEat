import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantTransactionComponent } from './restaurant-transaction.component';

describe('RestaurantTransactionComponent', () => {
  let component: RestaurantTransactionComponent;
  let fixture: ComponentFixture<RestaurantTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
