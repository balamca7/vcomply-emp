import { Component, OnInit, Input, Output, EventEmitter, HostListener, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { TaxfillingService } from '../../../_services/taxfilling.service';
import { FileuploadService } from '../../../_services/fileupload.service';

@Component({
  selector: 'app-citizenship',
  templateUrl: './citizenship.component.html',
  styleUrls: ['./citizenship.component.scss']
})
export class CitizenshipComponent implements OnInit, AfterViewInit {
@Input('edit') editMode = true;
//@ViewChild('focus') vc : ElementRef;
today: number = new Date().getFullYear();
	loading = false;
	public stateEntrydetails : any = [];
	public getCommonDetails : any = { 'fileList' : [] };
		public stateInfo:any = {};
		public taxpayerInfo:any = {'state':{'id':'','name' :''}};
		public spouseInfo:any = {};
		public depandantInfo:any = {};
		public showAddstate = false;
		public StatesList: any = [];
public selectedProduct:any={}
public errors: Array<string> =[];
    public formData: FormData = new FormData();
    public fileToUpload : any = {};
  constructor(private route: ActivatedRoute, public taxfilService: TaxfillingService,
         private toastyService:ToastyService,private router: Router,   private _fus: FileuploadService) { }

  ngOnInit() {
  	this.getStatesList(224);
  	this.getCitizenshipDetails();
  document.body.scrollTop = 0;   
  }
   
  
   ngAfterViewInit() {   
          
         /* if(this.editMode != false)          
          {
             this.vc.nativeElement.focus();
          }*/
    }
 
    onSelect(productId) { 
        this.selectedProduct = null;
        for (var i = 0; i < this.StatesList.length; i++)
        {
          if (this.StatesList[i].id == productId) {
            this.taxpayerInfo.state = this.StatesList[i];
          }
        }
    }

      onSpouseSelect(productId) { 
        this.selectedProduct = null;
        for (var i = 0; i < this.StatesList.length; i++)
        {
          if (this.StatesList[i].id == productId) {
            this.spouseInfo.state = this.StatesList[i];
          }
        }
    }
    onDepantantSelect(productId) { 
        this.selectedProduct = null;
        for (var i = 0; i < this.StatesList.length; i++)
        {
          if (this.StatesList[i].id == productId) {
            this.depandantInfo.state = this.StatesList[i];
          }
        }
    }

getStatesList(country_id){
    

      this.taxfilService.getStatesList(country_id)
            .subscribe(

                data => {
                  this.StatesList = data;
                }
                    
             );
  }

  getCitizenshipDetails(){

      this.taxfilService.getCitizenshipDetails()
            .subscribe(

                data => {
                  if(!this.isEmptyObject(data.TaxfileCommoninfo))
                  {
                    this.getCommonDetails = data.TaxfileCommoninfo;
                     if(this.getCommonDetails.status==2)
                    {
                        this.editMode = false;
                    }
                  }
                }
                    
             );
  }

  showAddstatedetails()
  {
  		this.showAddstate = true;
  }
   addStatedetails(stateInfo)
  {
  	//alert(JSON.stringify(stateInfo));

  	if(this.isEmptyObject(stateInfo))
    {
      return;
    }
    this.stateEntrydetails.push(stateInfo);
  	this.showAddstate = false;
  	  	this.stateInfo = {};
  	
  }
   deleteState(index: number, stateEntrydetails)
  {
    stateEntrydetails.splice(index,1);
  }

   isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

  addTaxpayerState(taxpayerInfo){
  	//alert(JSON.stringify(taxpayerInfo));
  	if(this.isEmptyObject(taxpayerInfo))
    {
      return;
    }
  	 this.getCommonDetails.stateEntrydetails.push(taxpayerInfo);
  	 this.taxpayerInfo = {};
  }

   addSpouseState(spouseInfo){
  	//alert(JSON.stringify(spouseInfo));
  	if(this.isEmptyObject(spouseInfo))
    {
      return;
    }
  	 this.getCommonDetails.spouse.stateEntrydetails.push(spouseInfo);
  	 this.spouseInfo = {};
  }

 	addDepandantState(depandant, stateEntrydetails)
 	{
 		//alert(JSON.stringify(depandant));
  	if(this.isEmptyObject(depandant))
    {
      return;
    }
  	 stateEntrydetails.push(depandant);
  	 this.depandantInfo = {};
 	}

 	saveCitizenshipDetails(CitizenshipInfo, files)
 	{
 		//alert(JSON.stringify(CitizenshipInfo));
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
        else{
      this.formData = new FormData();
     }
               this.formData.append("CitizenshipInfo", JSON.stringify(CitizenshipInfo));

       this.taxfilService.saveCitizenshipDetails(this.formData)
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
                           this.getCitizenshipDetails();
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
