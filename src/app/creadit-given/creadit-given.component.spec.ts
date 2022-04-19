import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaditGivenComponent } from './creadit-given.component';

describe('CreaditGivenComponent', () => {
  let component: CreaditGivenComponent;
  let fixture: ComponentFixture<CreaditGivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaditGivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaditGivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
