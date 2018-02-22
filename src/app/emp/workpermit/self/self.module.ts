import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../../@theme/theme.module';
import { SelfRoutingModule } from './self-routing.module';
import { SelfComponent } from './self.component';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const components = [
  
  SelfComponent,
  AddComponent,
  EditComponent

];

@NgModule({
declarations: [  ...components, ViewComponent,],
  imports: [
    CommonModule,
     ThemeModule,
    SelfRoutingModule
  ],
  
})
export class SelfModule { }
