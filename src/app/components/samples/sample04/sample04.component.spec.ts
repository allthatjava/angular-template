import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample04Component } from './sample04.component';

describe('Sample04Component', () => {
  let component: Sample04Component;
  let fixture: ComponentFixture<Sample04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sample04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sample04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
