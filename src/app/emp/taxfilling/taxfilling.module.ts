import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TaxfillingRoutingModule } from './taxfilling-routing.module';
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

import { ModalComponent } from './citizenship/modal/modal.component';
import { TaxproviderAreaComponent } from './taxprovider-area/taxprovider-area.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import {DynamicTabsDirective} from '../../_directive/dynamic-tabs.directive';
import { PropertyComponent } from './rental-income/property/property.component';
import { BusinessComponent } from './business-income/business/business.component';
import { PreviewComponent } from './preview/preview.component';
import { ViewpropertyComponent } from './rental-income/viewproperty/viewproperty.component';
import { ViewbusinessComponent } from './business-income/viewbusiness/viewbusiness.component';
@NgModule({
  imports: [
    CommonModule,
       ThemeModule,
    TaxfillingRoutingModule,
    Ng2SmartTableModule
  ],
  declarations: [TaxfillingComponent, GeneralInfoComponent, CitizenshipComponent, IncomeComponent, RentalIncomeComponent, BusinessIncomeComponent, SaleAssetsComponent, ItemizedDeductionsComponent, MovingDepComponent, FbarComponent, Form8938Component, SourceListComponent, AddCommentComponent, TaxproviderComponent, ModalComponent, TaxproviderAreaComponent, TabComponent, TabsComponent,
  DynamicTabsDirective, 
  PropertyComponent, BusinessComponent, PreviewComponent, ViewpropertyComponent, ViewbusinessComponent],
  entryComponents: [
    ModalComponent,
    TabComponent,
  ],
})
export class TaxfillingModule { }
