import { Component, OnInit } from '@angular/core';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { I94Service } from '../../../_services/i94.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
countries = [];
states = [];
public I94Info:any = [];
editMode = false;
loading = false;
profileImage = "";
  constructor(private i94Service: I94Service,
         private toastyService:ToastyService) { }

  ngOnInit() {
  	this.getI94Details();
  }
getI94Details(){
    
    
 	//this.editMode = false;
  
   this.i94Service.getI94Details()
            .subscribe(

                data => {

                   // console.log(data);
                  this.I94Info = data.I94Info;

                }
             );
  }
}
