import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';


import { DashboardModule } from './dashboard/dashboard.module';
import { CaseStatusModule } from './case-status/case-status.module';
import { QuestionnaireChecklistModule } from './questionnaire-checklist/questionnaire-checklist.module';
import { LcafolderComponent } from './lcafolder/lcafolder.component';
import { PafDocComponent } from './paf-doc/paf-doc.component';
import { ReceiveDocComponent } from './receive-doc/receive-doc.component';
import { I94Component } from './i94/i94.component';
import { EmpHrComponent } from './emp-hr/emp-hr.component';
import { ReportsComponent } from './reports/reports.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    PagesRoutingModule,
    
    DashboardModule,
    QuestionnaireChecklistModule,
    CaseStatusModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    LcafolderComponent,
    PafDocComponent,
    ReceiveDocComponent,
    I94Component,
    EmpHrComponent,
    ReportsComponent,

  ],
})
export class PagesModule {
}
