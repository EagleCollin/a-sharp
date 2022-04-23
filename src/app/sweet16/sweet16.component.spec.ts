import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sweet16Component } from './sweet16.component';

describe('Sweet16Component', () => {
  let component: Sweet16Component;
  let fixture: ComponentFixture<Sweet16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sweet16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sweet16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
