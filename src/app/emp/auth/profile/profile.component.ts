import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ProfileService } from '../../../_services/profile.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
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

 errors: Array<string> =[];
  @Input() fileExt: string = "JPG, GIF, PNG, PDF";
  @Input() maxFiles: number = 5;
  @Input() maxSize: number = 5; // 5MB
  @Output() uploadStatus = new EventEmitter();
public formData: FormData = new FormData();
  public genders = [
    { value: 'F', display: 'Female' },
    { value: 'M', display: 'Male' }
];

  constructor(
        public profileService: ProfileService,
         private toastyService:ToastyService) {
          
       // this.editMode = true;
          }

  ngOnInit() {
  	this.getProfile();
  }
  onFileChange(event){
       let files = event.target.files; 
       var reader = new FileReader();

      reader.onload = (event:any) => {
        this.profileImage =  event.target.result;
      }
       //this.addPassportDetails(files);
        reader.readAsDataURL(event.target.files[0]);
       this.updateProfileImage(files);
  }

  public updateProfileImage(files){
    this.loading = true;
    this.errors = []; // Clear error
     if (files.length > 0 && (!this.isValidFiles(files))) {
          this.uploadStatus.emit(false);
          this.loading = false;
          return;
      }     
        if (files.length > 0) {
            let formData: FormData = new FormData();
            formData.append("imagePath", files[0], files[0].name);
            

         this.profileService.updateProfileImage(formData)
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

 /* readUrl(event) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.onload = (event:any) => {
      this.profileImage =  event.target.result;
    }

    reader.readAsDataURL(event.target.files[0]);
  }
}*/
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

  

  private isValidFiles(files){
     // Check Number of files
      if (files.length > this.maxFiles) {
          this.errors.push("Error: At a time you can upload only " + this.maxFiles + " files");
          return;
      }        
      this.isValidFileExtension(files);
      return this.errors.length === 0;
    }
    private isValidFileExtension(files){
      // Make array of file extensions
      var extensions = (this.fileExt.split(','))
                      .map(function (x) { return x.toLocaleUpperCase().trim() });
      for (var i = 0; i < files.length; i++) {
          // Get file extension
          var ext = files[i].name.toUpperCase().split('.').pop() || files[i].name;
          // Check the extension exists
          var exists = extensions.includes(ext);
          if (!exists) {
              this.errors.push("Error (Extension): " + files[i].name);
          }
          // Check file size
          this.isValidFileSize(files[i]);
      }
    }

    private isValidFileSize(file) {
          var fileSizeinMB = file.size / (1024 * 1000);
          var size = Math.round(fileSizeinMB * 100) / 100; // convert upto 2 decimal place
          if (size > this.maxSize)
              this.errors.push("Error (File Size): " + file.name + ": exceed file size limit of " + this.maxSize + "MB ( " + size + "MB )");
    }

}
