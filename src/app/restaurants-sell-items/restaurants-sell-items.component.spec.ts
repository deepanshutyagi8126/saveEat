import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsSellItemsComponent } from './restaurants-sell-items.component';

describe('RestaurantsSellItemsComponent', () => {
  let component: RestaurantsSellItemsComponent;
  let fixture: ComponentFixture<RestaurantsSellItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsSellItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsSellItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
