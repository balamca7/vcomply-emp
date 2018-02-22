import { NgModule } from '@angular/core';
//import { AngularEchartsModule } from 'ngx-echarts';
//import { NgxChartsModule } from '@swimlane/ngx-charts';
//import { ChartModule } from 'angular2-chartjs';
import { FilterPipe } from '../_pipe/filter.pipe';
import { DashboardModule } from './dashboard/dashboard.module';

import { CommonModule } from '@angular/common';
import { ThemeModule } from '../@theme/theme.module';
import { TaxproviderRoutingModule } from './taxprovider-routing.module';
import { TaxproviderComponent } from './taxprovider.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { ClientAreaComponent } from './client-area/client-area.component';
import { PrivilegesComponent } from './privileges/privileges.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ProfileComponent } from './profile/profile.component';
import { TaxpayerInfoComponent } from './view-client/taxpayer-info/taxpayer-info.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import {DynamicTabsDirective} from './dynamic-tabs.directive';
import { CitizenshipComponent } from './view-client/citizenship/citizenship.component';
import { IncomeComponent } from './view-client/income/income.component';
import { RentalIncomeComponent } from './view-client/rental-income/rental-income.component';
import { BusinessIncomeComponent } from './view-client/business-income/business-income.component';
import { SaleAssetsComponent } from './view-client/sale-assets/sale-assets.component';
import { ItemizedDeductionsComponent } from './view-client/itemized-deductions/itemized-deductions.component';
import { MovingDepcareComponent } from './view-client/moving-depcare/moving-depcare.component';
import { FbarComponent } from './view-client/fbar/fbar.component';
import { Form8938Component } from './view-client/form8938/form8938.component';
import { CommentsComponent } from './view-client/comments/comments.component';
import { SourceListComponent } from './view-client/source-list/source-list.component';
import { ViewpropertyComponent } from './view-client/rental-income/viewproperty/viewproperty.component';
import { ViewbusinessComponent } from './view-client/business-income/viewbusiness/viewbusiness.component';

import { MessageComponent } from './message/message.component';
import { NewRequestComponent } from './privileges/new-request/new-request.component';
//import { EchartsBarComponent } from './dashboard/echarts-bar.component';

@NgModule({
  imports: [
    CommonModule,
    TaxproviderRoutingModule,
    ThemeModule,
    //AngularEchartsModule,
    DashboardModule
  ],
  declarations: [
  	TaxproviderComponent, 
  	//DashboardComponent, 
  	GeneralInfoComponent, 
  	ClientAreaComponent, 
  	PrivilegesComponent, 
  	ChangepasswordComponent, 
  	ProfileComponent, 
  	TaxpayerInfoComponent, 
  	ViewClientComponent, 
  	TabsComponent, 
  	TabComponent, 
    DynamicTabsDirective,
  	CitizenshipComponent, 
  	IncomeComponent, 
  	RentalIncomeComponent, 
  	BusinessIncomeComponent, 
  	SaleAssetsComponent, 
  	ItemizedDeductionsComponent, 
  	MovingDepcareComponent, 
  	FbarComponent, 
  	Form8938Component, 
  	CommentsComponent, 
  	SourceListComponent, ViewpropertyComponent, ViewbusinessComponent, 
    MessageComponent,
    FilterPipe,
    NewRequestComponent,
  	//EchartsBarComponent
     /*EchartsComponent, EchartsBarComponent*/
   ],
   exports:[FilterPipe],
    entryComponents: [
 
    TabComponent,
  ],
})
export class TaxproviderModule { }
