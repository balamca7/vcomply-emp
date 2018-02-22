import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingDepComponent } from './moving-dep.component';

describe('MovingDepComponent', () => {
  let component: MovingDepComponent;
  let fixture: ComponentFixture<MovingDepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovingDepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
