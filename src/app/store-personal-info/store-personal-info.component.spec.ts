import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePersonalInfoComponent } from './store-personal-info.component';

describe('StorePersonalInfoComponent', () => {
  let component: StorePersonalInfoComponent;
  let fixture: ComponentFixture<StorePersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorePersonalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorePersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
