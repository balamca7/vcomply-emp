import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { CertifiedLcaComponent } from './certified-lca.component';



@NgModule({
  imports: [
    ThemeModule,
    
  ],
  declarations: [
    CertifiedLcaComponent,

  ],
})
export class CertifiedLcaModule { }
