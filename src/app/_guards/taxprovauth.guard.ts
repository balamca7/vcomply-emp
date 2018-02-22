import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaxprovauthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
  	if(currentUser && currentUser['user_type'] == 3)
    {
    	return true;
    }
    this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
    return false;
  }
}
