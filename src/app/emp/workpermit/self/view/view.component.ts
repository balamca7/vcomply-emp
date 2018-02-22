import { Component, OnInit } from '@angular/core';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { WorkpermitService } from '../../../../_services/workpermit.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
countries = [];
states = [];
public WorkpermitInfo:any = [];
editMode = false;
loading = false;
profileImage = "";
  constructor(private workpermitService: WorkpermitService,
         private toastyService:ToastyService) { }

  ngOnInit() {
  this.getWorkpermitDetails();
  }
 getWorkpermitDetails(){
    
    
  	this.editMode = false;
  
   this.workpermitService.getWorkpermitDetails()
            .subscribe(

                data => {

                   // console.log(data);
                  this.WorkpermitInfo = data.WorkpermitInfo;

                }
             );
  }
}
