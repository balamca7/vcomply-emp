import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { BarComponent } from './bar/bar.component';
import { EchartsBarComponent } from './echarts-bar.component';

@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,

  ],
  declarations: [ DashboardComponent,BarComponent, EchartsBarComponent]
})
export class DashboardModule { }
