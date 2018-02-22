import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { WorkpermitComponent } from './workpermit.component';
//import { SelfComponent } from './self/self.component';
import { FamilyComponent } from './family/family.component';
import { ExtensionComponent } from './extension/extension.component';

const routes: Routes = [{
  path: '',
  component: WorkpermitComponent,
  children: [{
    path: 'self',
    //component: SelfComponent,
    loadChildren: './self/self.module#SelfModule',
  }, {
    path: 'family',
    component: FamilyComponent,
  }, {
    path: 'extension',
    component: ExtensionComponent,

  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkpermitRoutingModule { }
