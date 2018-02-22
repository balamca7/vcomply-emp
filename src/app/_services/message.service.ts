import { Injectable } from '@angular/core';
import { Http, Headers, Response ,BaseRequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MessageService  extends BaseRequestOptions{

  constructor(private http:Http) { super();}

  getMessageList()
  {
  	return this.http.get('Message/getMessageList', {})
  			.map((response : Response)=>{

  				let Details =response.json();
          
  				return Details;
  			});
  }

   getUnreadMessageList()
  {
  	return this.http.get('Message/getUnreadMessageList', {})
  			.map((response : Response)=>{

  				let Details =response.json();
          
  				return Details;
  			});
  }

}
