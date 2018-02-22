import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TaxproviderComponent } from './taxprovider.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { ClientAreaComponent } from './client-area/client-area.component';
import { PrivilegesComponent } from './privileges/privileges.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { MessageComponent } from './message/message.component';
const routes: Routes = [{
  path: '',
  component: TaxproviderComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'generalInfo',
    component: GeneralInfoComponent,
  },
  {
    path: 'client-area',
    component: ClientAreaComponent,
  },
   {
    path: 'privileges',
    component: PrivilegesComponent,
  },
  {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  },
  {
    path: 'message',
     component: MessageComponent,
  },
  {
    path: 'profile',
     component: ProfileComponent,
  },
  {
    path: 'change-password',
     component: ChangepasswordComponent,
  },
  {
    path: 'view-client/:id',
    component: ViewClientComponent,
  },
   {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxproviderRoutingModule { }
