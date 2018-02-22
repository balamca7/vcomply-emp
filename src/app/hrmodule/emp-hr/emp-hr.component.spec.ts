import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpHrComponent } from './emp-hr.component';

describe('EmpHrComponent', () => {
  let component: EmpHrComponent;
  let fixture: ComponentFixture<EmpHrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpHrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
