import { Injectable } from '@angular/core';
import { Http, Headers, Response ,BaseRequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class I94Service extends BaseRequestOptions{

  constructor(private http:Http) { super();}

    addI94Details(I94Info)
    {
      return this.http.post('Employeectl/addI94Details', I94Info)
        .map((response : Response)=>{

          let dataInfo =response.json();
          
          return dataInfo;
        });
    }

    getI94Details()
  	{
  		return this.http.post('Employeectl/viewI94Details', {})
  			.map((response : Response)=>{

  				let dataInfo =response.json();
          
  				return dataInfo;
  			});
  	}

    getI94DetailsByID(id:any)
    {
      return this.http.post('Employeectl/viewI94DetailsByid', {id:id})
        .map((response : Response)=>{

          let dataInfo =response.json();
          
          return dataInfo;
        });
    }

     updateI94Details(I94Info)
    {
      return this.http.post('Employeectl/updateI94Details', I94Info)
        .map((response : Response)=>{

          let wpInfo =response.json();
          
          return wpInfo;
        });
    }

     uploadDocument(DocumentInfo)
    {
      return this.http.post('Employeectl/uploadDocument', DocumentInfo)
        .map((response : Response)=>{

          let dataInfo =response.json();
          
          return dataInfo;
        });
    }
}
