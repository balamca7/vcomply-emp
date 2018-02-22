import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './_guards/auth.guard';
import { HrauthGuard } from './_guards/hrauth.guard';
import { TaxprovauthGuard } from './_guards/taxprovauth.guard';

import { HomeComponent} from './home/home.component';
import { LoginComponent} from './login/login.component';
import { SubscribeComponent} from './subscribe/subscribe.component';

const routes: Routes = [
 
  { path:'', component : HomeComponent },
  { path:'home', component : HomeComponent },
  { path:'login', component : LoginComponent },
  { path:'logout', component : LoginComponent },
  { path:'subscripe', component : SubscribeComponent },
  { path: 'emp',canActivate: [AuthGuard] , loadChildren: 'app/emp/pages.module#PagesModule' },
  { path: 'hr',canActivate: [HrauthGuard] , loadChildren: 'app/hrmodule/pages.module#PagesModule' },
   { path: 'taxprov' , canActivate: [TaxprovauthGuard], loadChildren: 'app/taxprovider/taxprovider.module#TaxproviderModule' },
 // { path: 'pages',canActivate: [AuthGuard] , component: PagesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
