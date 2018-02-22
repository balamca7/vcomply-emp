import { Component, OnInit, Input, Output, EventEmitter, HostListener,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { TaxfillingService } from '../../../_services/taxfilling.service';
import { FileuploadService } from '../../../_services/fileupload.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit , AfterViewInit  {
@Input('edit') editMode = true;

//@ViewChild('focus') vc : ElementRef;
	today: number = new Date().getFullYear();
	loading = false;
	public incomeInfo : any = { 'USInteresetIncome' : [], 'ForeignInteresetIncome' : [], 'USDividendIncome' : [], 'ForeignDividendIncome' : [], "fileList" : []};
	public USInteresetIncome : any = {};
	public ForeignInteresetIncome : any = {};
	public USDividendIncome : any = {};
	public ForeignDividendIncome : any = {};
	public errors: Array<string> =[];
  	public formData: FormData = new FormData();
  	public fileToUpload : any = {};
public CountryList:any =[];
  constructor(private route: ActivatedRoute, public taxfilService: TaxfillingService,
         private toastyService:ToastyService,private router: Router,   private _fus: FileuploadService) { }

  ngOnInit() {
  	this.getCountryList();
  	this.getIncomeInfo();
  	 document.body.scrollTop = 0;  
  }
   ngAfterViewInit() {  
   		/*  if(this.editMode != false)          
      {
         this.vc.nativeElement.focus();
      }*/
    }
	getCountryList(){
      this.taxfilService.getCountryList()
            .subscribe(

                data => {
                  this.CountryList = data;
                }
             );
	}

	onCountrySelect(productId) { 
      
        for (var i = 0; i < this.CountryList.length; i++)
        {
          if (this.CountryList[i].id == productId) {
            this.ForeignInteresetIncome.country = this.CountryList[i];
          }
        }
    }

	onForeignDividendCountrySelect(productId) { 
      
        for (var i = 0; i < this.CountryList.length; i++)
        {
          if (this.CountryList[i].id == productId) {
            this.ForeignDividendIncome.country = this.CountryList[i];
          }
        }
    }

   getIncomeInfo(){
      this.taxfilService.getIncomeInfo()
            .subscribe(

                data => {
	                if(!this.isEmptyObject(data.incomeInfo))
                  	{
	                  this.incomeInfo = data.incomeInfo;
	 					if(this.incomeInfo.status == 2)
	                  	{
	                  		this.editMode = false;
	                  	}
	                }
                }
                    
             );
  	}
    isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  	}

 	addUSInteresetIncome(infoDetails)
 	{
	  	if(this.isEmptyObject(infoDetails))
	    {
	      return;
	    }
	  	 this.incomeInfo.USInteresetIncome.push(infoDetails);
	  	 this.USInteresetIncome = {};
 	}

 	addForeignInteresetIncome(infoDetails)
 	{
	  	if(this.isEmptyObject(infoDetails))
	    {
	      return;
	    }
	  	 this.incomeInfo.ForeignInteresetIncome.push(infoDetails);
	  	 this.ForeignInteresetIncome = {};
 	}


 	addUSDividendIncome(infoDetails)
	{
	  	if(this.isEmptyObject(infoDetails))
	    {
	      return;
	    }
	  	 this.incomeInfo.USDividendIncome.push(infoDetails);
	  	 this.USDividendIncome = {};
 	}
 	addForeignDividendIncome(infoDetails)
 	{
	  	if(this.isEmptyObject(infoDetails))
	    {
	      return;
	    }
	  	 this.incomeInfo.ForeignDividendIncome.push(infoDetails);
	  	 this.ForeignDividendIncome = {};
 	}

 	 deleteIncome(index: number, entrydetails)
  	{
  		var response = confirm("Are you sure? \n you want to delete?");
  		if(response)
  		{
  			entrydetails.splice(index,1);	
  		}
  		else
  		{
  		return;	
  		}
    	
  	}

  	saveIncomeInfoDetails(incomeInfo, files)
  	{
  		//alert(JSON.stringify(incomeInfo));
//console.log(JSON.stringify(I94Info));
	      //this.loading = true;
	      this.errors = []; // Clear error
	     if (files.length > 0 && (!this._fus.isValidFiles(files))) {
	          this._fus.uploadStatus.emit(false);
	          this.loading = false;
	          return;
	      }  
	     
	      
	    if (files.length > 0) {
	            for (var j = 0; j < files.length; j++) {
	                this.formData.append("file[]", files[j], files[j].name);
	            }
	     }
	             this.formData.append("incomeInfo", JSON.stringify(incomeInfo));

	     this.taxfilService.addIncomeInfo(this.formData)
	            .subscribe(

	                data => {
	                    //console.log(data);
	                  this.loading = false;
	                    if(data.status == "success")
	                    {
	                      this.toastyService.success({
	                        title: '',
	                        msg: data.message,
	                        showClose: false});
	                         this.getIncomeInfo();
	                    }
	                    else
	                    {
	                       this.toastyService.error({
	                        title: '',
	                        msg: data.message,
	                        showClose: false});
	                      
	                        this.loading = false;
	                    }
	                }
	                    
	             );
  	}

  	onFileChange(event){
       let files = event.target.files; 
       var reader = new FileReader();

      reader.onload = (event:any) => {
        this.fileToUpload =  event.target.result;
      }
      
        reader.readAsDataURL(event.target.files[0]);
  }
}
