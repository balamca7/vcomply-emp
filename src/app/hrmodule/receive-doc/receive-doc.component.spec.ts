import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveDocComponent } from './receive-doc.component';

describe('ReceiveDocComponent', () => {
  let component: ReceiveDocComponent;
  let fixture: ComponentFixture<ReceiveDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
