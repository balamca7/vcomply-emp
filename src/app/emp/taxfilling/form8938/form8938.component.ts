import { Component, OnInit, Input, Output, EventEmitter, HostListener,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { TaxfillingService } from '../../../_services/taxfilling.service';
import { FileuploadService } from '../../../_services/fileupload.service';



@Component({
  selector: 'app-form8938',
  templateUrl: './form8938.component.html',
  styleUrls: ['./form8938.component.scss']
})
export class Form8938Component implements OnInit , AfterViewInit  {
@Input('edit') editMode = true;
//@ViewChild('focus') vc : ElementRef;
	today: number = new Date().getFullYear()-1;
	loading = false;
	public formInfo : any = {};
	disabled_flg = false;
	
	public errors: Array<string> =[];
  	public formData: FormData = new FormData();
  	public fileToUpload : any = {};
	
  constructor(private route: ActivatedRoute, public taxfilService: TaxfillingService,
         private toastyService:ToastyService,private router: Router,   private _fus: FileuploadService) { }


  ngOnInit() {
      this.getForm8938InfoDetails();
      document.body.scrollTop = 0;  
  }
  ngAfterViewInit() {          

      /* if(this.editMode != false)          
      {
         this.vc.nativeElement.focus();
      }*/
    }

    isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
    }
  getForm8938InfoDetails()
  {
      this.taxfilService.getForm8938InfoDetails()
            .subscribe(

                data => {
                if(!this.isEmptyObject(data))
                  {
                  this.formInfo = data;
                  if(this.formInfo.status == 2)
                   {
                      this.editMode = false;
                   }
                   }
                }
             );
  }

  saveForm8939Details(formInfo)
  {
  	//alert(JSON.stringify(formInfo));
   
      this.loading = true;
    
      this.taxfilService.saveForm8938Info(formInfo)
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
                          this.getForm8938InfoDetails();
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
