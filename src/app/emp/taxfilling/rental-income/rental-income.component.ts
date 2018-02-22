import { Component, OnInit,Input, Output, EventEmitter, ViewChild,HostListener } from '@angular/core';
import {TabsComponent} from '../tabs/tabs.component';

import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';

import { TaxfillingService } from '../../../_services/taxfilling.service';


@Component({
  selector: 'app-rental-income',
  templateUrl: './rental-income.component.html',
  styleUrls: ['./rental-income.component.scss']
})
export class RentalIncomeComponent implements OnInit {
@Input('edit') editMode = true;

 @ViewChild('property') propertyTemplate;
  @ViewChild(TabsComponent) tabsComponent;
@ViewChild('propertyView') viewPropertyTemplate;
  public propertyList :any = [];

  constructor(private route: ActivatedRoute, public taxfilService: TaxfillingService,
         private toastyService:ToastyService,private router: Router) { }

  ngOnInit() {
    this.getRentalincomeInfo();
     document.body.scrollTop = 0;  
  }
 
  getRentalincomeInfo()
  {
    this.taxfilService.getRentalincomeInfo()
            .subscribe(

                data => {
                  this.propertyList = data.RentalincomeInfo;
                  //this.editMode = false;
                  if(data.status == 2)
                  {
                    this.editMode = false;
                  }
                }
                    
             );
  }

  onAddProperty() {
    
    this.tabsComponent.openTab(
      'Property',
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
       
             this.taxfilService.deleteRentalInfo({"id": id})
              .subscribe(

                  data => {
                      //console.log(data);
                  
                      if(data.status == "success")
                      {
                        this.toastyService.success({
                          title: '',
                          msg: data.message,
                          showClose: false});
                           this.getRentalincomeInfo();
                           
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
   //alert(JSON.stringify(dataModel));

   this.taxfilService.addRentalincomeInfo(dataModel)
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
                           this.getRentalincomeInfo();
                           
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
   /* if(dataModel.id > 0) {
      this.propertyList = this.propertyList.map(person => {
        if(person.id === dataModel.id) {
          return dataModel;
        } else {
          return person;
        }
      });  
    } else {
      // create a new one
      //dataModel.id = Math.round(Math.random()*100);
      this.propertyList.push(dataModel);
    }*/
    
   
  }

  onCloseTab() {
   
    // close the tab
    this.tabsComponent.closeActiveTab();
  }
  
}
