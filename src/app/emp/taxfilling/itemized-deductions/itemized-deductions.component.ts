import { Component, OnInit, Input, Output, EventEmitter, HostListener,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { TaxfillingService } from '../../../_services/taxfilling.service';
import { FileuploadService } from '../../../_services/fileupload.service';

@Component({
  selector: 'app-itemized-deductions',
  templateUrl: './itemized-deductions.component.html',
  styleUrls: ['./itemized-deductions.component.scss']
})
export class ItemizedDeductionsComponent implements OnInit, AfterViewInit  {
@Input('edit') editMode = true;
//@ViewChild('focus') vc : ElementRef;
	today: number = new Date().getFullYear()-1;
	loading = false;
	public itemizedInfo : any = {
          'usmedical_year':this.today, 
          'charity_year' : this.today, 
          "fileList" : []
          };
	disabled_flg = false;
	public errors: Array<string> =[];
  	public formData: FormData = new FormData();
  	public fileToUpload : any = {};
	public yesnoList = [
   	 	{ value: 'Yes', display: 'Yes' },
   	 	{ value: 'No', display: 'No' },
    	{ value : 'Not Applicable', display : 'Not Applicable'}
	];
  public maxFiles;
  constructor(private route: ActivatedRoute, public taxfilService: TaxfillingService,
         private toastyService:ToastyService,private router: Router,   private _fus: FileuploadService) { 

          this.maxFiles = this._fus.maxFiles;

         }
  

  ngOnInit() {
      this.getItemizedDeductionsDetails();
       document.body.scrollTop = 0;  
  }
  ngAfterViewInit() {            
     /* if(this.editMode != false)          
      {
         this.vc.nativeElement.focus();
      }*/
    }
  onSelect(productId) { 
      if(productId != "Yes" )
      {
        this.itemizedInfo.homeloan_interest = "";
        this.disabled_flg = true;
      }
      else
      {
        this.disabled_flg = false;  
      }
    }

  onFileChange(event){
       let files = event.target.files; 
       var reader = new FileReader();

      reader.onload = (event:any) => {
        this.fileToUpload =  event.target.result;
      }
      
        reader.readAsDataURL(event.target.files[0]);
  }
 isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
    }
  getItemizedDeductionsDetails()
  {
    this.taxfilService.getItemizedDeductionsDetails()
            .subscribe(

                data => {
                if(!this.isEmptyObject(data.itemizedInfo))
                  {
                    this.itemizedInfo = data.itemizedInfo;
                   if(this.itemizedInfo.status == 2)
                    {
                      this.editMode = false;
                    }
                  }
                 
                  
                }
                    
             );
  }
  saveItemizedDetails(itemizedInfo, files)
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
               this.formData.append("itemizedInfo", JSON.stringify(itemizedInfo));

       this.taxfilService.saveItemizedDeductionsInfo(this.formData)
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
                           this.getItemizedDeductionsDetails();
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
