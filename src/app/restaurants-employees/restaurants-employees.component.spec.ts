import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsEmployeesComponent } from './restaurants-employees.component';

describe('RestaurantsEmployeesComponent', () => {
  let component: RestaurantsEmployeesComponent;
  let fixture: ComponentFixture<RestaurantsEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
