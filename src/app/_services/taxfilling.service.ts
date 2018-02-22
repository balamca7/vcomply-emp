import { Injectable } from '@angular/core';
import { Http, Headers, Response ,BaseRequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TaxfillingService extends BaseRequestOptions{

  constructor(private http:Http) { super();}

  getGeneralInfoDetails()
  {
  	return this.http.get('Taxfilingctl/getTaxpayerInfo', {})
  			.map((response : Response)=>{

  				let Details =response.json();
          
  				return Details;
  			});
  }

  saveGeneralInfoDetails(generalInfo)
  {
  	return this.http.post('Taxfilingctl/addTaxpayerInfo', generalInfo)
  			.map((response : Response)=>{

  				let Details =response.json();
          
  				return Details;
  			});
  }

  getTaxproviderDetails()
  {
  	return this.http.get('Taxfilingctl/getTaxproviderDetails', {})
  			.map((response : Response)=>{

  				let Details =response.json();
          
  				return Details;
  			});
  }

  getTaxproviderId()
  {
  	return this.http.get('Taxfilingctl/getTaxproviderId', {})
  			.map((response : Response)=>{

  				let Details =response.json();
          
  				return Details;
  			});
  }

  saveTaxproviderDetails(generalInfo)
  {
  	return this.http.post('Taxfilingctl/updateTaxprovider', generalInfo)
  			.map((response : Response)=>{

  				let Details =response.json();
          
  				return Details;
  			});
  }


  getSourceListDetails()
  {
  	return this.http.get('Taxfilingctl/getSourcelistDetailsById', {})
  			.map((response : Response)=>{

  				let Details =response.json();
          
  				return Details;
  			});
  }

  addSourceListDetails(sourceInfo)
  {
    return this.http.post('Taxfilingctl/addSourcelistDetails', sourceInfo)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }

	getStatesList(country_id)
	{
		return this.http.post('Profile/getStatesList', {'country_id': country_id})
  			.map((response : Response)=>{

  				let Details =response.json();
          
  				return Details;
  			});
  
	}

	getCountryList()
	{
		return this.http.get('Profile/getCountryList', {})
  			.map((response : Response)=>{

  				let Details =response.json();
          
  				return Details;
  			});
  
	}

   getCitizenshipDetails()
  {
  	return this.http.get('Taxfilingctl/getCitizenshipInfo', {})
  			.map((response : Response)=>{

  				let Details =response.json();
          
  				return Details;
  			});
  }

  saveCitizenshipDetails(citizenshipInfo)
  {
  	return this.http.post('Taxfilingctl_bala/addCitizenshipInfo', citizenshipInfo)
  			.map((response : Response)=>{

  				let Details =response.json();
          
  				return Details;
  			});
  }

   getIncomeInfo()
  {
  	return this.http.get('Taxfilingctl/getIncomeInfo', {})
  			.map((response : Response)=>{

  				let Details =response.json();
          
  				return Details;
  			});
  }

  addIncomeInfo(incomeInfo)
  {
  		return this.http.post('Taxfilingctl/addIncomeInfo', incomeInfo)
  			.map((response : Response)=>{

  				let Details =response.json();
          
  				return Details;
  			});
  }

	getAssetsDetails()
	{
		return this.http.get('Taxfilingctl/getAssestsInfo', {})
  			.map((response : Response)=>{

  				let Details =response.json();
          
  				return Details;
  			});
	}

	saveAssetsInfo(assetsInfo)
  {
  		return this.http.post('Taxfilingctl/addAssetsInfo', assetsInfo)
  			.map((response : Response)=>{

  				let Details =response.json();
          
  				return Details;
  			});
  }

  getItemizedDeductionsDetails()
	{
		return this.http.get('Taxfilingctl/getItemizedInfo', {})
  			.map((response : Response)=>{

  				let Details =response.json();
          
  				return Details;
  			});
	}

	saveItemizedDeductionsInfo(assetsInfo)
  {
  		return this.http.post('Taxfilingctl/addItemizedInfo', assetsInfo)
  			.map((response : Response)=>{

  				let Details =response.json();
          
  				return Details;
  			});
  }

  getMovingDepInfo()
	{
		return this.http.get('Taxfilingctl/getMovingDepInfo', {})
  			.map((response : Response)=>{

  				let Details =response.json();
          
  				return Details;
  			});
	}

	saveMovingDepInfo(assetsInfo)
  {
  		return this.http.post('Taxfilingctl/addMovingDepInfo', assetsInfo)
  			.map((response : Response)=>{

  				let Details =response.json();
          
  				return Details;
  			});
  }

 getFbarInfoDetails()
  {
    return this.http.get('Taxfilingctl/getFbarInfo', {})
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }

  saveFbarInfo(FbarInfo)
  {
      return this.http.post('Taxfilingctl/addFbarInfo', FbarInfo)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }

  getForm8938InfoDetails()
  {
    return this.http.get('Taxfilingctl/getForm8938Info', {})
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }

   saveForm8938Info(formInfo)
  {
      return this.http.post('Taxfilingctl/addForm8938Info', formInfo)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }

  getSubmitformInfo()
  {
    return this.http.get('Taxfilingctl/getSubmitformInfo', {})
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }

  addSubmitformInfo(formInfo)
  {
   return this.http.post('Taxfilingctl/addSubmitformInfo', formInfo)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }
  finalSubmitformInfo(formInfo)
  {
   return this.http.post('Taxfilingctl/SubmitformallInfo', formInfo)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }
  

//------------------------Tax provider page API-----------------------------------

getTaxproviderGeneralInfo()
  {
    return this.http.get('Taxfilingctl/getTaxproviderGenInfo', {})
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }

  saveTaxproviderGeneralInfo(generalInfo)
  {
    return this.http.post('Taxfilingctl/saveTaxproviderGenInfo', generalInfo)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }

  getClientInfo()
  {
    return this.http.get('Taxfilingctl/getClientInfo', {})
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }
  
   getTaxpayerInfoBypost(id)
  {
    return this.http.post('Taxfilingctl/getTaxpayerInfoBypost', id)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }

  getSourcelistByIdpost(id)
  {
    
    return this.http.post('Taxfilingctl/getSourcelistByIdpost', id)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }

   getCitizenshippost(id)
  {
    
    return this.http.post('Taxfilingctl/getCitizenshippost', id)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }

  getIncomeInfopost(id)
  {
      return this.http.post('Taxfilingctl/getIncomeInfopost', id)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }

  getRentalincomeInfo()
  {
    return this.http.get('Taxfilingctl/getRentalincomeInfo', {})
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }

  addRentalincomeInfo(IncomeInfo)
  {
    return this.http.post('Taxfilingctl/addRentalincomeInfo', IncomeInfo)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }

   deleteRentalInfo(IncomeInfo)
  {
    return this.http.post('Taxfilingctl/deleteRentalInfo', IncomeInfo)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }

  getBusinessincomeInfo()
  {
     return this.http.get('Taxfilingctl/getBusinessincomeInfo', {})
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }
  addBusinessincomeInfo(IncomeInfo)
  {
    return this.http.post('Taxfilingctl/addBusinessincomeInfo', IncomeInfo)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }
  deleteBusinessInfo(IncomeInfo)
  {
    return this.http.post('Taxfilingctl/deleteBusinessInfo', IncomeInfo)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }
  getAssestsInfopost(id)
  {
    return this.http.post('Taxfilingctl/getAssestsInfopost', id)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }

  getItemizedInfopost(id)
  {
    return this.http.post('Taxfilingctl/getItemizedInfopost', id)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }

   getMovingDepInfopost(id)
  {
    return this.http.post('Taxfilingctl/getMovingDepInfopost', id)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }
  getRentalincomeInfopost(id)
  {
    return this.http.post('Taxfilingctl/getRentalincomeInfopost', id)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }
   getBusinessincomeInfopost(id)
  {
     return this.http.post('Taxfilingctl/getBusinessincomeInfopost', id)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }
  getFbarInfopost(id)
  {
    return this.http.post('Taxfilingctl/getFbarInfopost', id)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }

  getForm8938Infopost(id)
  {
    return this.http.post('Taxfilingctl/getForm8938Infopost', id)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }
  getSubmitformInfopost(id)
  {
    return this.http.post('Taxfilingctl/getSubmitformInfopost', id)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }
//-------------Tax provider area----------------------    
  getTaxfilingmenu()
  {
    return this.http.get('Taxfilingctl/getTaxfilingmenu', {})
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }

   addReviewStatus(idInfo)
  {
    return this.http.post('Taxfilingctl/addReviewStatus', idInfo)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }

  updateReviewStatus(idInfo)
  {
    return this.http.post('Taxfilingctl/updateReviewStatus', idInfo)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }

  getInstruction()
  {
    return this.http.get('Taxfilingctl/getInstruction', {})
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }

  saveRequesttoClient(reqInfo)
  {
    return this.http.post('Taxfilingctl/saveInstruction', reqInfo)
        .map((response : Response)=>{

          let Details =response.json();
          
          return Details;
        });
  }

  

}
