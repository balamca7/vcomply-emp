import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaxfillingComponent } from './taxfilling.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { CitizenshipComponent } from './citizenship/citizenship.component';
import { IncomeComponent } from './income/income.component';
import { RentalIncomeComponent } from './rental-income/rental-income.component';
import { BusinessIncomeComponent } from './business-income/business-income.component';
import { SaleAssetsComponent } from './sale-assets/sale-assets.component';
import { ItemizedDeductionsComponent } from './itemized-deductions/itemized-deductions.component';
import { MovingDepComponent } from './moving-dep/moving-dep.component';
import { FbarComponent } from './fbar/fbar.component';
import { Form8938Component } from './form8938/form8938.component';
import { SourceListComponent } from './source-list/source-list.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { TaxproviderComponent } from './taxprovider/taxprovider.component';
import { TaxproviderAreaComponent } from './taxprovider-area/taxprovider-area.component';
import { PreviewComponent } from './preview/preview.component';
const routes: Routes = [{
  path: '',
  component: TaxfillingComponent,
  children: [

  {
    path: 'tax-provider',
    component: TaxproviderComponent,
  },
  {
    path: 'source-list',
    component: SourceListComponent,
  },
  {
    path: 'generalInfo',
    component: GeneralInfoComponent,
  },
	{
    path: 'citizenship',
    component: CitizenshipComponent,
  },
  {
    path: 'income',
    component: IncomeComponent,
  },
   {
    path: 'rental-income',
    component: RentalIncomeComponent,
  },
   {
    path: 'business-income',
    component: BusinessIncomeComponent,
  },
  {
    path: 'sale-assets',
    component: SaleAssetsComponent,
  },
  {
    path: 'itemized-deductions',
    component: ItemizedDeductionsComponent,
  },
  {
    path: 'moving-dep',
    component: MovingDepComponent,
  },
  {
    path: 'fbar',
    component: FbarComponent,
  },
  {
    path: 'form-8938',
    component: Form8938Component,
  },
  {
    path: 'add-comment',
    component: AddCommentComponent,
  },
  {
    path: 'taxprovider-area',
    component: TaxproviderAreaComponent,
  },
  {
    path: 'preview',
    component: PreviewComponent,
  }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class TaxfillingRoutingModule { }
