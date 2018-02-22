import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseStatusComponent } from './case-status.component';

import { ThemeModule } from '../../@theme/theme.module';
@NgModule({
  imports: [
    CommonModule,
    ThemeModule
  ],
  declarations: [CaseStatusComponent]
})
export class CaseStatusModule { }
