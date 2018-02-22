import { NgModule } from '@angular/core';
import { EqualValidator } from '../_directive/equal-validator.directive';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { CertifiedLcaModule } from './certified-lca/certified-lca.module';
import { QuestionnaireChecklistModule } from './questionnaire-checklist/questionnaire-checklist.module';
import { CaseStatusModule } from './case-status/case-status.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { ChangepasswordComponent } from './changepassword/changepassword.component';


import { MessageComponent } from './message/message.component';

const PAGES_COMPONENTS = [
  PagesComponent,
  ChangepasswordComponent,
    EqualValidator,
    MessageComponent
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    CertifiedLcaModule,
    QuestionnaireChecklistModule,
    CaseStatusModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    MessageComponent,

   
  ],
})
export class PagesModule {
}
