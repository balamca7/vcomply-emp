import { Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';

import { TaxfillingService } from '../../_services/taxfilling.service';

@Component({
  selector: 'app-client-area',
  templateUrl: './client-area.component.html',
  styleUrls: ['./client-area.component.scss']
})
export class ClientAreaComponent implements OnInit {
	
	public clientInfo : any = [];
  constructor(private route: ActivatedRoute, public taxfilService: TaxfillingService,
         private toastyService:ToastyService,private router: Router) { }

  ngOnInit() {
  	/*this.clientInfo = [
  		{id : 1, name : 'Bala'},
  		{id : 2, name : 'Ezhil'},
  		{id : 3, name : 'Shobana'},
  		{id : 4, name : 'Bala'},
  		{id : 5, name : 'Ezhil'},
  		{id : 6, name : 'Shobana'},
  		{id : 7, name : 'Bala'},
  		{id : 8, name : 'Ezhil'},
  		{id : 9, name : 'Shobana'}
  	];*/

  	this.getClientInfo();
  }

   getClientInfo(){

      this.taxfilService.getClientInfo()
            .subscribe(

                data => {
                  this.clientInfo = data.clientInfo;
                }
                    
             );
  }

}
