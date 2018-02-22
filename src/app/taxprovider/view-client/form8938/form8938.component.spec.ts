import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form8938Component } from './form8938.component';

describe('Form8938Component', () => {
  let component: Form8938Component;
  let fixture: ComponentFixture<Form8938Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form8938Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form8938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
