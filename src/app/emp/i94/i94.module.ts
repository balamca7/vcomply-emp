import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../@theme/theme.module';
import { I94RoutingModule } from './i94-routing.module';
import { I94Component } from './i94.component';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    I94RoutingModule
  ],
  declarations: [I94Component, AddComponent, EditComponent, ViewComponent]
})
export class I94Module { }
