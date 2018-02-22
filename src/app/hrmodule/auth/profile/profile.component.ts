import { Component, OnInit } from '@angular/core';
//import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../../_services/profile.service';



//import { FileUploader} from 'ng2-file-upload/ng2-file-upload';

import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
 
})


export class ProfileComponent implements OnInit {
countries = [];
states = [];
userInfo = {};
editMode = false;
loading = false;
profileImage = "";


  public genders = [
    { value: 'F', display: 'Female' },
    { value: 'M', display: 'Male' }
];

  constructor(
        private profileService: ProfileService,
         private toastyService:ToastyService) {
          
       // this.editMode = true;
          }

  ngOnInit() {
  	this.getProfile();
  }

  getProfile(){
    
    
  	this.editMode = false;
  
   this.profileService.getProfile()
            .subscribe(

                data => {
                    //console.log(data.userInfo);
                   this.countries = data.countryInfo;
                   this.states = data.statesInfo;
                   this.userInfo = data.userInfo;
                    this.profileImage = data.userInfo.imagepath;

                },
             );
  }
  editProfile()
  {
    this.loading = false;
    this.editMode = !(this.editMode);
   
  }

  readUrl(event) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.onload = (event:any) => {
      this.profileImage =  event.target.result;
    }

    reader.readAsDataURL(event.target.files[0]);
  }
}
  updateProfile(userInfo)
  {
  	 this.loading = true;
    //console.log(JSON.stringify(userInfo));
    this.profileService.updateProfile(userInfo)
            .subscribe(

                data => {
                    console.log(data);
                  
                    if(data.status == "success")
                    {
                      this.toastyService.success({
                        title: ' ',
                        msg: data.message,
                        showClose: false});
                         setTimeout(()=>{   
                                     this.editMode = !(this.editMode); 
                                     this.getProfile();
                                },1000);
                    }
                    else
                    {
                      setTimeout(()=>{   
                                     this.editMode = !(this.editMode); 
                                 
                                },1000);
                       this.toastyService.error({
                        title: 'error',
                        msg: data.message,
                        showClose: false});
                      
                        
                    }
                }
                    
             );

  	  
  }

}
