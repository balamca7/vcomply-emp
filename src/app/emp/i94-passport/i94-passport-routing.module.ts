import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { I94PassportComponent } from './i94-passport.component';
import { I94Component } from './i94/i94.component';
import { PassportComponent } from './passport/passport.component';
const routes: Routes = [{
  path: '',
  component: I94PassportComponent,
  children: [{
    path: 'i94',
    component: I94Component,
  }, {
    path: 'passport',
    component: PassportComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class I94PassportRoutingModule { }
