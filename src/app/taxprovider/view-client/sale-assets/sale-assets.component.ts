import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
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
export class SaleAssetsComponent implements OnInit {

  today: number = new Date().getFullYear();
	loading = false;
	public assetsInfo : any = {'USAssets':[], 'ForeignAssets' :[]};
	public USAssets : any = {};
	public ForeignAssets : any = {};
	public StatesList: any = [];
	public CountryList:any =[];
	public errors: Array<string> =[];
  	public formData: FormData = new FormData();
  	public fileToUpload : any = {};

  constructor(private route: ActivatedRoute, public taxfilService: TaxfillingService,
         private toastyService:ToastyService,private router: Router,   private _fus: FileuploadService) { }

  ngOnInit() {
    
     this.route.params.subscribe(params => {
    let id = params['id'];
       this.getAssetsDetails(id);
      });
  }
	
    getAssetsDetails(id)
    {
        this.taxfilService.getAssestsInfopost({'id':id})
            .subscribe(

                data => {
                  this.assetsInfo = data.assetsInfo;
                }
                    
             );
    }
  	
   

}
