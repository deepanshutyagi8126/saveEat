import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsPersonalInformationComponent } from './restaurants-personal-information.component';

describe('RestaurantsPersonalInformationComponent', () => {
  let component: RestaurantsPersonalInformationComponent;
  let fixture: ComponentFixture<RestaurantsPersonalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsPersonalInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsPersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
