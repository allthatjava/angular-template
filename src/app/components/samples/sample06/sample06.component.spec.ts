import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample06Component } from './sample06.component';

describe('Sample06Component', () => {
  let component: Sample06Component;
  let fixture: ComponentFixture<Sample06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sample06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sample06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
