import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { TaxfillingService } from '../../../_services/taxfilling.service';


@Component({
  selector: 'app-fbar',
  templateUrl: './fbar.component.html',
  styleUrls: ['./fbar.component.scss']
})
export class FbarComponent implements OnInit {
	
	loading = false;
	public fbarInfo : any = {};
	
  constructor(private route: ActivatedRoute, public taxfilService: TaxfillingService,
         private toastyService:ToastyService,private router: Router) { }

  ngOnInit() {
  
   this.route.params.subscribe(params => {
    let id = params['id'];
       this.getFbarInfoDetails(id);
      });

  }
  

  getFbarInfoDetails(id){
      this.taxfilService.getFbarInfopost({'id':id})
            .subscribe(

                data => {
                  this.fbarInfo = data;
                 
                }
             );
  }

 	
}
