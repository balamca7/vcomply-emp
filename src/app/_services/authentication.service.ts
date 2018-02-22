import { Injectable } from '@angular/core';
import { Http, Headers, Response ,BaseRequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
@Injectable()
export class AuthenticationService extends BaseRequestOptions{

  constructor(private http:Http) {   super();this.headers =  new Headers(); }

  login(username : string, password : string)
  {
  	return this.http.post('Account/login', {username : username, password:password})
  			.map((response : Response)=>{

  				let user =response.json();
         // console.log(user);
  				if(user && user.token)
  				{
             //this.token = user && user.token;

             this.headers.append('Content-Type', 'application/json');
              this.headers.append('Authorization', 'Bearer ' + user.token );      
  					 localStorage.setItem('currentUser', JSON.stringify(user));
            //console.log(localStorage.getItem('currentUser'));

            if(user.user_type == 1)
              user.redirectUrl = "emp";
            else if(user.user_type == 2)
              user.redirectUrl = "hr";
            else if(user.user_type == 3)
              user.redirectUrl = "taxprov";

  				}
  				return user;
  			});
  }

  
  logout(): void {
        // clear token remove user from local storage to log user out
      
        localStorage.removeItem('currentUser');
        localStorage.clear();
       //alert(localStorage.getItem('currentUser'));
//        location.reload();
      
    }


    changePassword(userInfo)
  {
    return this.http.post('Profile/changePassword', userInfo)
        .map((response : Response)=>{

          let user =response.json();
         // console.log(user);
          return user;
        });
  }
  
}
