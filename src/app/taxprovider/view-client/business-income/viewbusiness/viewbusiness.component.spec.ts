import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbusinessComponent } from './viewbusiness.component';

describe('ViewbusinessComponent', () => {
  let component: ViewbusinessComponent;
  let fixture: ComponentFixture<ViewbusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
