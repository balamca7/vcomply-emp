import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { SelfComponent } from './self.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [{
  path: '',
  component: SelfComponent,
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
export class SelfRoutingModule { }
