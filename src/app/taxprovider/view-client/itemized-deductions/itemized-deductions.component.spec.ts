import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemizedDeductionsComponent } from './itemized-deductions.component';

describe('ItemizedDeductionsComponent', () => {
  let component: ItemizedDeductionsComponent;
  let fixture: ComponentFixture<ItemizedDeductionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemizedDeductionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemizedDeductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
