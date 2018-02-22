import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcafolderComponent } from './lcafolder.component';

describe('LcafolderComponent', () => {
  let component: LcafolderComponent;
  let fixture: ComponentFixture<LcafolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcafolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcafolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
