import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../@theme/theme.module';
import { I94PassportRoutingModule } from './i94-passport-routing.module';
import { I94PassportComponent } from './i94-passport.component';
import { I94Component } from './i94/i94.component';
import { PassportComponent } from './passport/passport.component';


const components = [
  I94PassportComponent,
 I94Component,
    PassportComponent,

];

@NgModule({
 declarations: [
    ...components
  ],
  imports: [
    CommonModule ,
     ThemeModule,
    I94PassportRoutingModule
  ],

  

})
export class I94PassportModule { }
