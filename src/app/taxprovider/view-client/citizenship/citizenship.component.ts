import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
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
export class CitizenshipComponent implements OnInit {

  today: number = new Date().getFullYear();
	loading = false;
	public stateEntrydetails : any = [];
	public getCommonDetails : any = {  };
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
    this.route.params.subscribe(params => {
    let id = params['id'];
   // alert(id);
      this.getCitizenshipDetails(id);
      });
    
  	
  }
  
  getCitizenshipDetails(id){

      this.taxfilService.getCitizenshippost({'id':id})
            .subscribe(

                data => {
                  this.getCommonDetails = data.TaxfileCommoninfo;
                }
                    
             );
  }

 
 
}
