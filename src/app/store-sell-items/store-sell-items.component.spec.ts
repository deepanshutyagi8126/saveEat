import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSellItemsComponent } from './store-sell-items.component';

describe('StoreSellItemsComponent', () => {
  let component: StoreSellItemsComponent;
  let fixture: ComponentFixture<StoreSellItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreSellItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSellItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
