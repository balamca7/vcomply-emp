import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { TaxfillingService } from '../../../_services/taxfilling.service';
import { FileuploadService } from '../../../_services/fileupload.service';


@Component({
  selector: 'app-moving-depcare',
  templateUrl: './moving-depcare.component.html',
  styleUrls: ['./moving-depcare.component.scss']
})
export class MovingDepcareComponent implements OnInit {

  today: number = new Date().getFullYear()-1;
	loading = false;
	public movingDepInfo : any = {};
	disabled_flg = false;
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
     this.route.params.subscribe(params => {
    let id = params['id'];
       this.getMovingDepInfo(id);
      });
  }

  
 getMovingDepInfo(id)
  {
    this.taxfilService.getMovingDepInfopost({'id':id})
            .subscribe(

                data => {
                  this.movingDepInfo = data.movingDepInfo;
                }
                    
             );
  }
 
}
