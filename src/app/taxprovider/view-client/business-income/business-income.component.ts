import { Component, OnInit,Input, Output, EventEmitter, ViewChild,HostListener } from '@angular/core';
import {TabsComponent} from '../../tabs/tabs.component';

import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';

import { TaxfillingService } from '../../../_services/taxfilling.service';

@Component({
  selector: 'app-business-income',
  templateUrl: './business-income.component.html',
  styleUrls: ['./business-income.component.scss']
})
export class BusinessIncomeComponent implements OnInit {
 
  @ViewChild(TabsComponent) tabsComponent;
@ViewChild('propertyView') viewPropertyTemplate;
  public propertyList:any = [];

  constructor(private route: ActivatedRoute, public taxfilService: TaxfillingService,
         private toastyService:ToastyService,private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
    let id = params['id'];
       this.getBusinessincomeInfo(id);
      });
  }
 
   getBusinessincomeInfo(id)
  {
    this.taxfilService.getBusinessincomeInfopost({"id":id})
            .subscribe(

                data => {
                  this.propertyList = data;
                }
                    
             );
  }
 
onViewProperty(property) {
  
    this.tabsComponent.openTab(
      `View ${property.id}`, 
      this.viewPropertyTemplate, 
      property,
      true
    );
  }

  onCloseTab() {
   
    // close the tab
    this.tabsComponent.closeActiveTab();
  }
  

}
