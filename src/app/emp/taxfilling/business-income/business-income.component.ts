import { Component, OnInit,Input, Output, EventEmitter, ViewChild,HostListener } from '@angular/core';
import {TabsComponent} from '../tabs/tabs.component';

import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';

import { TaxfillingService } from '../../../_services/taxfilling.service';

@Component({
  selector: 'app-business-income',
  templateUrl: './business-income.component.html',
  styleUrls: ['./business-income.component.scss']
})
export class BusinessIncomeComponent implements OnInit {
@Input('edit') editMode = true;
  @ViewChild('property') propertyTemplate;
  @ViewChild(TabsComponent) tabsComponent;
@ViewChild('propertyView') viewPropertyTemplate;
  public propertyList:any = [];

  constructor(private route: ActivatedRoute, public taxfilService: TaxfillingService,
         private toastyService:ToastyService,private router: Router) { }

  ngOnInit() {
     this.getBusinessincomeInfo();
      document.body.scrollTop = 0;
  }
 
   getBusinessincomeInfo()
  {
    this.taxfilService.getBusinessincomeInfo()
            .subscribe(

                data => {
                  this.propertyList = data.BusinessincomeInfo;
                 if(data.status == 2)
                  {
                    this.editMode = false;
                  }
                }
                    
             );
  }
  onAddProperty() {
    
    this.tabsComponent.openTab(
      'Business',
      this.propertyTemplate, 
      {},
      true
    );

  }
 onEditProperty(property) {
 	
    this.tabsComponent.openTab(
      `Editing ${property.id}`, 
      this.propertyTemplate, 
      property,
      true
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
  onRemoveProperty(id)
  {
   
  	var response = confirm("Are you sure? \n you want to delete?");
  		if(response)
  		{
  			//this.propertyList.splice(index,1);	
         this.taxfilService.deleteBusinessInfo({"id": id})
              .subscribe(

                  data => {
                      if(data.status == "success")
                      {
                        this.toastyService.success({
                          title: '',
                          msg: data.message,
                          showClose: false});
                           this.getBusinessincomeInfo();
                           
                      }
                      else
                      {
                         this.toastyService.error({
                          title: '',
                          msg: data.message,
                          showClose: false});
                        
                         
                      }
                  }
                      
               );
  		}
  		else
  		{
  		return;	
  		}
		
  }
   onPropertyFormSubmit(dataModel) {
  
    this.taxfilService.addBusinessincomeInfo(dataModel)
              .subscribe(

                  data => {
                      //console.log(data);
                  
                      if(data.status == "success")
                      {
                         // close the tab
                           this.tabsComponent.closeActiveTab();
                        this.toastyService.success({
                          title: '',
                          msg: data.message,
                          showClose: false});
                           this.getBusinessincomeInfo();
                           
                      }
                      else
                      {
                         this.toastyService.error({
                          title: '',
                          msg: data.message,
                          showClose: false});
                        
                         
                      }
                  }
                      
               );
    
  }
  onCloseBusinessTab() {
   alert();
    // close the tab
    this.tabsComponent.closeActiveTab();
  }
  
}
