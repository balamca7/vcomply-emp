import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { TaxfillingService } from '../../_services/taxfilling.service';


@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.scss']
})
export class ViewClientComponent implements OnInit {
	public clientInfo :any ={};
  constructor(private route: ActivatedRoute, public taxfilService: TaxfillingService,
         private toastyService:ToastyService,private router: Router) { }

  ngOnInit() {
  	this.route.params.subscribe(params => {
      
    let id = params['id'];
       this.addReviewStatus(id);
      });
  	this.clientInfo = {
  		client_id : 7,
  		started_time : "2018-02-13 12:29:55",
  		end_time : ""
  	};
  }


	saveReviewCompleted(clientDetails)
	{
		//alert(taxpayer_id);
		//var current_date = new Date();
		//this.clientInfo.end_time = current_date;
		 var response = confirm("Are you sure? you want to complete the review?");
		if(response)
		{
		this.taxfilService.updateReviewStatus(clientDetails)
		    .subscribe(

		        data => {
		        	
		          this.clientInfo = data.Reviewstatus;
		        }
		            
		     );
		}
	}
	addReviewStatus(id){

	      this.taxfilService.addReviewStatus({'id':id})
	            .subscribe(

	                data => {
	                	
	                  this.clientInfo = data.Reviewstatus;
	                }
	                    
	             );
	  }

}
