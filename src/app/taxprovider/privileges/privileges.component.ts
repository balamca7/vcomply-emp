import { Component, OnInit,Input, Output, EventEmitter, ViewChild,HostListener } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {TabsComponent} from '../tabs/tabs.component';

import { TaxfillingService } from '../../_services/taxfilling.service';

@Component({
  selector: 'app-privileges',
  templateUrl: './privileges.component.html',
  styleUrls: ['./privileges.component.scss']
})
export class PrivilegesComponent implements OnInit {
	public clientInfo : any = [];
  public privilegeInfo : any = {"client_id": "", "menuInfo" : []};
  public dataInfo : any = {"privilegeInfo": {}, "clientInfo" : []};
  public menuInfo : any = [];
  public requestList : any = [];
    loading = false;
    checked=true;
     @ViewChild('property') propertyTemplate;
  @ViewChild(TabsComponent) tabsComponent;

  constructor(private route: ActivatedRoute, public taxfilService: TaxfillingService,
         private toastyService:ToastyService,private router: Router) { }

  ngOnInit() {

    this.requestList = [{'id': 1,'name' : "Bala", 'subject':' Trying to find a solution to this problem...', 'request_time' :'2018-02-16 10:10:10' , 'response_time' :'2018-02-16 11:10:10', 'status':'Completed'},
    {'id': 2,'name' : "Bala", 'subject':' Trying to find a solution to this problem...', 'request_time' :'2018-02-16 10:10:10' , 'response_time' :'', 'status':'Pending'},
    {'id': 3,'name' : "Ezhil", 'subject':' Trying to find a solution to this problem...', 'request_time' :'2018-02-16 10:10:10' , 'response_time' :'2018-02-16 11:10:10', 'status':'Completed'},
    {'id': 4,'name' : "Shobana", 'subject':' Trying to find a solution to this problem...', 'request_time' :'2018-02-16 10:10:10' , 'response_time' :'', 'status':'Pending'},
    {'id': 5,'name' : "Shobana", 'subject':' Trying to find a solution to this problem...', 'request_time' :'2018-02-16 10:10:10' , 'response_time' :'2018-02-16 11:10:10', 'status':'Completed'},
    {'id': 6,'name' : "Nantha", 'subject':' Trying to find a solution to this problem...', 'request_time' :'2018-02-16 10:10:10' , 'response_time' :'', 'status':'Pending'},
    ];
    this.getRequestList();
    this.getClientInfo();
    this.getTaxfilingmenu();
  }

   onAddRequest() {
    
    this.tabsComponent.openTab(
      'New Request',
      this.propertyTemplate, 
      {},
      true
    );

  }
 getRequestList()
 {
  
  this.taxfilService.getInstruction()
            .subscribe(

                data => {
                  this.requestList = data;
                }
                    
             );
  }
   getClientInfo(){

      this.taxfilService.getClientInfo()
            .subscribe(

                data => {
                  this.clientInfo = data.clientInfo;
                  
                  this.dataInfo.clientInfo = this.clientInfo;
                }
                    
             );
  }

  getTaxfilingmenu()
  {
    this.taxfilService.getTaxfilingmenu()
            .subscribe(

                data => {
                  this.privilegeInfo.menuInfo = data;
                  this.dataInfo.privilegeInfo = this.privilegeInfo;
                }
                    
             );
  }


  saveClientPrivileges(privilegeInfo)
  {
    
     var menuInfo = privilegeInfo.menuInfo;
     var selectedCount = 0;
     for (var i = 0; i < menuInfo.length; i++) {
      if(menuInfo[i].selected == true)
      {
        selectedCount++;
      }
    }
    if(selectedCount == 0)
    {
      alert("Please select atlease one module.");
      return;
    }
  
     this.taxfilService.saveRequesttoClient(privilegeInfo)
              .subscribe(

                  data => {
                   
                    this.loading = false;
                      if(data.status == "success")
                      {
                          this.tabsComponent.closeActiveTab();
                        this.toastyService.success({
                          title: '',
                          msg: data.message,
                          showClose: false});
                           this.getRequestList();
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
