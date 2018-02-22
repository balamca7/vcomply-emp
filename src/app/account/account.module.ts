import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { ThemeModule } from '../@theme/theme.module';
@NgModule({
  imports: [
    CommonModule,
     AccountRoutingModule
  ],
  declarations: [AccountComponent, LoginComponent, LogoutComponent, RegisterComponent]
})
export class AccountModule { }
