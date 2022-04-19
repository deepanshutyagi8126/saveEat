import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsMenusComponent } from './restaurants-menus.component';

describe('RestaurantsMenusComponent', () => {
  let component: RestaurantsMenusComponent;
  let fixture: ComponentFixture<RestaurantsMenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsMenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
