import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [{
  path: '',
  component: AccountComponent,
  children: [{
    path: '',
   component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }, {
    path: 'logout',
    component: LogoutComponent,
  }, {
    path: 'register',
    component: RegisterComponent,

  }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule { }
