import { Component, OnInit,Input, Output, EventEmitter, ViewChild,HostListener } from '@angular/core';
import {TabsComponent} from '../../tabs/tabs.component';

import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';

import { TaxfillingService } from '../../../_services/taxfilling.service';


@Component({
  selector: 'app-rental-income',
  templateUrl: './rental-income.component.html',
  styleUrls: ['./rental-income.component.scss']
})
export class RentalIncomeComponent implements OnInit {
  @ViewChild(TabsComponent) tabsComponent;
@ViewChild('propertyView') viewPropertyTemplate;
  propertyList = [];

  constructor(private route: ActivatedRoute, public taxfilService: TaxfillingService,
         private toastyService:ToastyService,private router: Router) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
    let id = params['id'];
       this.getRentalincomeInfo(id);
      });
  }
 
  getRentalincomeInfo(id)
  {
    this.taxfilService.getRentalincomeInfopost({'id':id})
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
