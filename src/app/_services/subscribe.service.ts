import { Injectable } from '@angular/core';
import { Http, Headers, Response ,BaseRequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SubscribeService extends BaseRequestOptions{

  constructor(private http:Http) { super();}

getPlans()
  {
  	return this.http.get('Account/getPlans', {})
  			.map((response : Response)=>{

  				let planDetails =response.json();
          
  				return planDetails;
  			});
  }

  buySubscription(userInfo)
  {
  	return this.http.put('Account/register', userInfo)
  			.map((response : Response)=>{

  				let userDetails =response.json();
          
  				return userDetails;
  			});
  }

}
