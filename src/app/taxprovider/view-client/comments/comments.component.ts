import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { TaxfillingService } from '../../../_services/taxfilling.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  today: number = new Date().getFullYear()-1;
	loading = false;
	public commentInfo : any = {};
	disabled_flg = false;
	public CountryList:any =[];
	public errors: Array<string> =[];
  	public formData: FormData = new FormData();
  	public fileToUpload : any = {};
   constructor(private route: ActivatedRoute, public taxfilService: TaxfillingService,
         private toastyService:ToastyService,private router: Router) { }


  ngOnInit() {
      this.route.params.subscribe(params => {
    let id = params['id'];
       this.getSubmitformInfo(id);
      });
  }

   getSubmitformInfo(id){
      this.taxfilService.getSubmitformInfopost({'id':id})
            .subscribe(

                data => {
                  this.commentInfo = data;
                  
                }
             );
  }
  

}
