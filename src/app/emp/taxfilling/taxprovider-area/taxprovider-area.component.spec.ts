import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxproviderAreaComponent } from './taxprovider-area.component';

describe('TaxproviderAreaComponent', () => {
  let component: TaxproviderAreaComponent;
  let fixture: ComponentFixture<TaxproviderAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxproviderAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxproviderAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
