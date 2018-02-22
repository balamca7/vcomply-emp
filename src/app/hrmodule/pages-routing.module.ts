import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionnaireChecklistComponent } from './questionnaire-checklist/questionnaire-checklist.component';
import { CaseStatusComponent } from './case-status/case-status.component';
import { PafDocComponent } from './paf-doc/paf-doc.component';
import { LcafolderComponent } from './lcafolder/lcafolder.component';
import { ReceiveDocComponent } from './receive-doc/receive-doc.component';
import { EmpHrComponent } from './emp-hr/emp-hr.component';
import { I94Component } from './i94/i94.component';
import { ReportsComponent } from './reports/reports.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'case-status',
    component: CaseStatusComponent,

  },
   {
    path: 'questionnaire-checklist',
    component: QuestionnaireChecklistComponent,

  },
   {
    path: 'paf-doc',
    component: PafDocComponent,

  },
  {
    path: 'lcafold',
    component: LcafolderComponent,

  },
   {
    path: 'receive-doc',
    component: ReceiveDocComponent,

  },
  {
    path: 'emp-hr',
    component: EmpHrComponent,

  },
   {
    path: 'i94',
    component: I94Component,

  },
  {
    path: 'reports',
    component: ReportsComponent,

  },
  /*{
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
  },*/
   {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
