import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
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
export class IncomeComponent implements OnInit {

 today: number = new Date().getFullYear();
	loading = false;
	public incomeInfo : any = { 'USInteresetIncome' : [], 'ForeignInteresetIncome' : [], 'USDividendIncome' : [], 'ForeignDividendIncome' : []};
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
  
  	 this.route.params.subscribe(params => {
    let id = params['id'];
       this.getIncomeInfo(id);
      });
  }
	
	

	

   getIncomeInfo(id){
    

      this.taxfilService.getIncomeInfopost({'id':id})
            .subscribe(

                data => {
                  this.incomeInfo = data.incomeInfo;
                }
                    
             );
  }

}
