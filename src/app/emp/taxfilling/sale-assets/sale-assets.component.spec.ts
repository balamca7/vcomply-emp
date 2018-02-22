import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleAssetsComponent } from './sale-assets.component';

describe('SaleAssetsComponent', () => {
  let component: SaleAssetsComponent;
  let fixture: ComponentFixture<SaleAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
