import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbarComponent } from './fbar.component';

describe('FbarComponent', () => {
  let component: FbarComponent;
  let fixture: ComponentFixture<FbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
