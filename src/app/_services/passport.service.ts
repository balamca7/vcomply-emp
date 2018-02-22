import { Injectable } from '@angular/core';
import { Http, Headers, Response ,BaseRequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PassportService extends BaseRequestOptions{

  constructor(private http:Http) { super();}

  /*  addPassportDetails(PassportInfo)
    {
      return this.http.post('Employeectl/addPassportDetails', PassportInfo)
        .map((response : Response)=>{

          let dataInfo =response.json();
          
          return dataInfo;
        });
    }*/

    getPassportDetails()
  	{
  		return this.http.post('Employeectl/viewPassportdetails', {})
  			.map((response : Response)=>{

  				let dataDetails =response.json();
          
  				return dataDetails;
  			});
  	}

     getPassportDetailsByID(id:any)
    {
      return this.http.post('Employeectl/viewPassportDetailsByid', {id:id})
        .map((response : Response)=>{

          let dataInfo =response.json();
          
          return dataInfo;
        });
    }

     updatePassportDetails(PassportInfo)
    {
      return this.http.post('Employeectl/updatePassportDetails', PassportInfo)
        .map((response : Response)=>{

          let dataInfo =response.json();
          
          return dataInfo;
        });
    }
    addPassportDetails(passportInfo)
    {
      return this.http.post('Employeectl/addPassportDetails', passportInfo)
        .map((response : Response)=>{

          let dataInfo =response.json();
          
          return dataInfo;
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
