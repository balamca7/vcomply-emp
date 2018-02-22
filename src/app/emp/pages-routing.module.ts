import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CertifiedLcaComponent } from './certified-lca/certified-lca.component';
import { QuestionnaireChecklistComponent } from './questionnaire-checklist/questionnaire-checklist.component';
import { CaseStatusComponent } from './case-status/case-status.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

import { MessageComponent } from './message/message.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'taxfill',

    loadChildren: './taxfilling/taxfilling.module#TaxfillingModule',
  },
  {
    path: 'workpermit',

    loadChildren: './workpermit/workpermit.module#WorkpermitModule',
  }, {
    path: 'certified-lca',  
    component: CertifiedLcaComponent,
     //loadChildren: './certified-lca/certified-lca.module#CertifiedLcaModule',
  },
   {
    path: 'passport',

     loadChildren: './passport/passport.module#PassportModule',
  },
  {
    path: 'i94',

     loadChildren: './i94/i94.module#I94Module',
  },
    {
    path: 'questionnaire-checklist',
    component: QuestionnaireChecklistComponent,

  },
  {
    path: 'case-status',
    component: CaseStatusComponent,

  },{
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
  },
  {
    path: 'change-password',
     component: ChangepasswordComponent,
  },
  {
    path: 'message',
    component: MessageComponent,

  },
   {
    path: '',
    redirectTo: 'case-status',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
