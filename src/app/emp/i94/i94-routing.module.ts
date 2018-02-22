import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { I94Component } from './i94.component';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [{
  path: '',
  component: I94Component,
  children: [
	{
    path: '',
    component: ViewComponent,
	 },
  {
    path: 'add',
    component: AddComponent,
   
  }, {
    path: 'edit/:id',
    component: EditComponent,
  }],
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  //declarations: [RouterModule]
})
export class I94RoutingModule { }
