import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
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
export class Form8938Component implements OnInit {

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
     
       this.route.params.subscribe(params => {
    let id = params['id'];
       this.getForm8938InfoDetails(id);
      });
  }

  getForm8938InfoDetails(id)
  {
      this.taxfilService.getForm8938Infopost({'id':id})
            .subscribe(

                data => {
                  this.formInfo = data;
                }
             );
  }

  

}
