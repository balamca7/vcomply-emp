import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { EchartsComponent } from './echarts/echarts.component';
import { EchartsBarComponent } from './echarts/echarts-bar.component';
import { CompletedBarComponent } from './echarts/completed-bar.component';

@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    EchartsComponent,
    EchartsBarComponent,
    CompletedBarComponent
  ],
})
export class DashboardModule { }
