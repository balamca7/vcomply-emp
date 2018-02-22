import { Component, OnInit, Input, Output, EventEmitter, HostListener,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { TaxfillingService } from '../../../_services/taxfilling.service';
import { FileuploadService } from '../../../_services/fileupload.service';

@Component({
  selector: 'app-sale-assets',
  templateUrl: './sale-assets.component.html',
  styleUrls: ['./sale-assets.component.scss']
})
export class SaleAssetsComponent implements OnInit, AfterViewInit  {
@Input('edit') editMode = true;
//@ViewChild('focus') vc : ElementRef;
today: number = new Date().getFullYear();
	loading = false;
	public assetsInfo : any = {'USAssets':[], 'ForeignAssets' :[], "fileList" : []};
	public USAssets : any = {};
	public ForeignAssets : any = {};
	public StatesList: any = [];
	public CountryList:any =[];
	public errors: Array<string> =[];
  	public formData: FormData = new FormData();
  	public fileToUpload : any = {};
  public maxFiles;
  constructor(private route: ActivatedRoute, public taxfilService: TaxfillingService,
         private toastyService:ToastyService,private router: Router,   private _fus: FileuploadService) {  this.maxFiles = this._fus.maxFiles;}

  ngOnInit() {
    this.getAssetsDetails();
  	this.getCountryList();
  	this.getStatesList(224);
     document.body.scrollTop = 0;  
    
  }
  ngAfterViewInit() {            
      /*    if(this.editMode != false)          
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
  	getStatesList(country_id){
      this.taxfilService.getStatesList(country_id)
            .subscribe(

                data => {
                  this.StatesList = data;
                }
             );
	}
	onStateSelect(productId) { 
      
        for (var i = 0; i < this.StatesList.length; i++)
        {
          if (this.StatesList[i].id == productId) {
            this.USAssets.state = this.StatesList[i];
          }
        }
    }
    onCountrySelect(productId) { 
      
        for (var i = 0; i < this.CountryList.length; i++)
        {
          if (this.CountryList[i].id == productId) {
            this.ForeignAssets.country = this.CountryList[i];
          }
        }
    }
   isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  	}

 	addUSAssets(infoDetails)
 	{
	  	if(this.isEmptyObject(infoDetails))
	    {
	      return;
	    }
	  	 this.assetsInfo.USAssets.push(infoDetails);
	  	 this.USAssets = {};
 	}
	addForeignAssets(infoDetails)
	{
		if(this.isEmptyObject(infoDetails))
	    {
	      return;
	    }
	  	 this.assetsInfo.ForeignAssets.push(infoDetails);
	  	 this.ForeignAssets = {};
	}
 	deleteAssests(index: number, entrydetails)
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
    
    getAssetsDetails()
    {
        this.taxfilService.getAssetsDetails()
            .subscribe(

                data => {
                  if(!this.isEmptyObject(data.assetsInfo))
                  {
                  this.assetsInfo = data.assetsInfo;
                   //this.editMode = false;
                   if(this.assetsInfo.status == 2)
                    {
                      this.editMode = false;
                    }
                  }
                }
                    
             );
    }
  	
    saveAssetsInfoDetails(assetsInfo, files)
  	{
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
        else{
      this.formData = new FormData();
     }
               this.formData.append("assetsInfo", JSON.stringify(assetsInfo));

       this.taxfilService.saveAssetsInfo(this.formData)
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
                           this.getAssetsDetails();
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
