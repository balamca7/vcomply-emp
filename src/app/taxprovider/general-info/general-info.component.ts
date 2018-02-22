import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { TaxfillingService } from '../../_services/taxfilling.service';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {
public generalInfo:any = {};
	 loading = false;
   editMode = false;
	 public taxProviderList = [];
  constructor(private route: ActivatedRoute, public taxfilService: TaxfillingService,
         private toastyService:ToastyService,private router: Router) { }

  ngOnInit() {
      this.getTaxproviderGeneralInfo();
  }

  editGeneralInfo()
  {
    this.loading = false;
    this.editMode = !(this.editMode);
   
  }
	getTaxproviderGeneralInfo()
  {

      this.editMode  = false;
      this.taxfilService.getTaxproviderGeneralInfo()
            .subscribe(

                data => {
                  this.generalInfo = data;
                }
                    
             );
 
  }
	saveTaxprovGeneralInfo(generalInfo){
    //alert(JSON.stringify(generalInfo));

       this.taxfilService.saveTaxproviderGeneralInfo(generalInfo)
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
                           this.getTaxproviderGeneralInfo();
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
