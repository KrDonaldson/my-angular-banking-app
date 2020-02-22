import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastcashComponent } from './fastcash.component';

describe('FastcashComponent', () => {
  let component: FastcashComponent;
  let fixture: ComponentFixture<FastcashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastcashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastcashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
