import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreOrderHistoryComponent } from './store-order-history.component';

describe('StoreOrderHistoryComponent', () => {
  let component: StoreOrderHistoryComponent;
  let fixture: ComponentFixture<StoreOrderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreOrderHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
