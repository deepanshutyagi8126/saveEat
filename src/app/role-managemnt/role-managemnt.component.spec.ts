import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleManagemntComponent } from './role-managemnt.component';

describe('RoleManagemntComponent', () => {
  let component: RoleManagemntComponent;
  let fixture: ComponentFixture<RoleManagemntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleManagemntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleManagemntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
