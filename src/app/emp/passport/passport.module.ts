import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../@theme/theme.module';
import { PassportRoutingModule } from './passport-routing.module';
import { PassportComponent } from './passport.component';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    PassportRoutingModule
  ],
  declarations: [PassportComponent,AddComponent, EditComponent, ViewComponent]
})
export class PassportModule { }
