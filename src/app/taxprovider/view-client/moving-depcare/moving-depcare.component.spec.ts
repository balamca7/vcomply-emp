import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingDepcareComponent } from './moving-depcare.component';

describe('MovingDepcareComponent', () => {
  let component: MovingDepcareComponent;
  let fixture: ComponentFixture<MovingDepcareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovingDepcareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingDepcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
