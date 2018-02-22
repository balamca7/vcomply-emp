import { Component, OnInit } from '@angular/core';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { PassportService } from '../../../_services/passport.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
countries = [];
states = [];
public PassportInfo:any = [];
editMode = false;
loading = false;
profileImage = "";
  constructor(private passportService: PassportService,
         private toastyService:ToastyService) { }

  ngOnInit() {
  	this.getPassportDetails();
  }
getPassportDetails(){
    
    
  	this.editMode = false;
  
   this.passportService.getPassportDetails()
            .subscribe(

                data => {

                    console.log(data);
                  this.PassportInfo = data.PassportInfo;

                }
             );
  }

}
