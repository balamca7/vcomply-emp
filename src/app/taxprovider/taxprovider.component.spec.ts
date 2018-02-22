import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxproviderComponent } from './taxprovider.component';

describe('TaxproviderComponent', () => {
  let component: TaxproviderComponent;
  let fixture: ComponentFixture<TaxproviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxproviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
