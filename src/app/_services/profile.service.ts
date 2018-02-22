import { Injectable } from '@angular/core';
import { Http, Headers, Response ,BaseRequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService extends BaseRequestOptions{


  constructor(private http:Http) { super();}

  getProfile()
  {
  	return this.http.post('Profile/profile', {})
  			.map((response : Response)=>{

  				let userDetails =response.json();
          
  				return userDetails;
  			});
  }

   updateProfile(userInfo)
  {
  	return this.http.post('Profile/updateProfile', userInfo)
  			.map((response : Response)=>{

  				let userDetails =response.json();
          
  				return userDetails;
  			});
  }

   updateProfileImage(userInfo)
  {
    return this.http.post('Uploadcontroller/uploadImage', userInfo)
        .map((response : Response)=>{

          let userDetails =response.json();
          
          return userDetails;
        });
  }

changePassword(userInfo)
  {
    return this.http.post('Profile/changePassword', userInfo)
        .map((response : Response)=>{

          let userDetails =response.json();
          
          return userDetails;
        });
  }
}
