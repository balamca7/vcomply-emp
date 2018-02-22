import { Component, OnInit, Input, Output, EventEmitter, HostListener,AfterViewInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { TaxfillingService } from '../../../_services/taxfilling.service';
import { FileuploadService } from '../../../_services/fileupload.service';


@Component({
  selector: 'app-fbar',
  templateUrl: './fbar.component.html',
  styleUrls: ['./fbar.component.scss']
})
export class FbarComponent implements OnInit, AfterViewInit  {
@Input('edit') editMode = true;
//@ViewChild('focus') vc : ElementRef;
	today: number = new Date().getFullYear()-1;
	loading = false;
	public fbarInfo : any = {};
	disabled_flg = false;
	public CountryList:any =[];
	public errors: Array<string> =[];
  	public formData: FormData = new FormData();
  	public fileToUpload : any = {};
	public yesnoList = [
   	 	{ value: 'Yes', display: 'Yes' },
   	 	{ value: 'No', display: 'No' },
    	{ value : 'Not Applicable', display : 'Not Applicable'}
	];
  constructor(private route: ActivatedRoute, public taxfilService: TaxfillingService,
         private toastyService:ToastyService,private router: Router,   private _fus: FileuploadService) { }

  ngOnInit() {
    this.getFbarInfoDetails();
  	this.getCountryList();
  document.body.scrollTop = 0;
  }
  ngAfterViewInit() {            
   
     //    this.vc.nativeElement.focus();
    }

  getCountryList(){
      this.taxfilService.getCountryList()
            .subscribe(

                data => {
                  this.CountryList = data;
                }
             );
	}
isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
    }
  getFbarInfoDetails(){
      this.taxfilService.getFbarInfoDetails()
            .subscribe(

                data => {
                if(!this.isEmptyObject(data))
                  {
                  this.fbarInfo = data;
                  if(this.fbarInfo.cumulative_balances != "Yes")
                  {
                    this.disabled_flg = true;
                  }
                  if(this.fbarInfo.status == 2)
                   {
                      this.editMode = false;
                   }
                   }
                }
             );
  }

 	onSelect(productId) { 
      if(productId != "Yes" )
      {
      	this.fbarInfo.country_id = "";
      	this.disabled_flg = true;
      }
      else
      {
      	this.disabled_flg = false;	
      }
    }

  saveFbarInfoDetails(fbarInfo)
  {
  	//alert(JSON.stringify(fbarInfo));
    //console.log(JSON.stringify(I94Info));
      this.loading = true;
    
      this.taxfilService.saveFbarInfo(fbarInfo)
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
                          this.getFbarInfoDetails();
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

}
