import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { TaxfillingService } from '../../../_services/taxfilling.service';

@Component({
  selector: 'app-taxprovider',
  templateUrl: './taxprovider.component.html',
  styleUrls: ['./taxprovider.component.scss']
})
export class TaxproviderComponent implements OnInit {
@Input('edit') editMode = true;
	public generalInfo:any = {"taxprovider" :{}};
	 loading = false;
	 public taxProviderList = [];
  constructor(private route: ActivatedRoute, public taxfilService: TaxfillingService,
         private toastyService:ToastyService,private router: Router) { }

  ngOnInit() {
  	this.getTaxproviderDetails();
    this.getTaxproviderId();
     document.body.scrollTop = 0;  
  }

  onTaxproviderSelect(Id) { 
        this.generalInfo.taxprovider = {};
        for (var i = 0; i < this.taxProviderList.length; i++)
        {
          if (this.taxProviderList[i].id == Id) {
            this.generalInfo= this.taxProviderList[i];
          }
         
        }
    }
  getTaxproviderDetails(){
    //this.editMode = false;
     this.taxfilService.getTaxproviderDetails()
            .subscribe(
                data => {
                   // console.log(data);
                 this.taxProviderList = data;
                }
             );
  }
  getTaxproviderId(){
    //this.editMode = false;
     this.taxfilService.getTaxproviderId()
            .subscribe(
                data => {
                   //alert(JSON.stringify(data.taxprovider));
                   if(data.taxprovider != null)
                  {
                    this.generalInfo = data.taxprovider;
                    
                    if(this.generalInfo.status==2)
                    {
                        this.editMode = false;
                    }
                  }
                }
             );
  }
  saveTaxprovider(taxprovider){
    //alert(JSON.stringify(generalInfo));
    //console.log(JSON.stringify(taxprovider));
    
     this.loading = true;

      this.taxfilService.saveTaxproviderDetails({'taxprovider_id': taxprovider.id})
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
                         this.getTaxproviderId();
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
