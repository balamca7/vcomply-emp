import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PafDocComponent } from './paf-doc.component';

describe('PafDocComponent', () => {
  let component: PafDocComponent;
  let fixture: ComponentFixture<PafDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PafDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PafDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
