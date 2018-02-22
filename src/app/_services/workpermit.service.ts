import { Injectable } from '@angular/core';
import { Http, Headers, Response ,BaseRequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkpermitService extends BaseRequestOptions{

  constructor(private http:Http) { super();}

    addWorkpermitDetails(WorkpermitInfo)
    {
      return this.http.post('Employeectl/addWorkpermit', WorkpermitInfo)
        .map((response : Response)=>{

          let wpInfo =response.json();
          
          return wpInfo;
        });
    }

  updateWorkpermitDetails(WorkpermitInfo)
    {
      return this.http.post('Employeectl/updateWorkpermit', WorkpermitInfo)
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

	getWorkpermitDetails()
  	{
  		return this.http.post('Employeectl/viewWorkpermit', {})
  			.map((response : Response)=>{

  				let userDetails =response.json();
          
  				return userDetails;
  			});
  	}


  	getWorkpermitDetailsByID(id:any)
  	{
  		return this.http.post('Employeectl/viewWorkpermitByid', {id:id})
  			.map((response : Response)=>{

  				let userDetails =response.json();
          
  				return userDetails;
  			});
  	}

    getCategory()
    {
      return this.http.get('Dashboard/getCategory', {})
        .map((response : Response)=>{

          let category =response.json();
          
          return category;
        });
    }

    getSubCategory(id:any)
    {
      return this.http.post('Dashboard/getSubCategory', {categoryId : id})
        .map((response : Response)=>{

          let res =response.json();
          
          return res;
        });
    }
}
