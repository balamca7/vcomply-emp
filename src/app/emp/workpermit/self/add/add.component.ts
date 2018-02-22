import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { WorkpermitService } from '../../../../_services/workpermit.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
subscription:Subscription;
	public WorkpermitInfo:any = {};
	public visaTypeList = [];
	public WPTypeList = [];
	loading = false;
   errors: Array<string> =[];
 // @Input() fileExt: string = "JPG, GIF, PNG, PDF";
  @Input() fileExt: string = "PDF";
  @Input() maxFiles: number = 5;
  @Input() maxSize: number = 5; // 5MB
  @Output() uploadStatus = new EventEmitter();
public formData: FormData = new FormData();

  constructor(private route: ActivatedRoute,private workpermitService: WorkpermitService,
         private toastyService:ToastyService,private router: Router) { }

  

  ngOnInit() {
  	
  	this.getVisaType();
    this.getWorkpermitType();
  /*  this.WorkpermitInfo = {"workpermit_type":17,"number":"12345","issue_date":"2017-10-30","validity_FD":"2017-10-30","validity_TD":"2017-10-30","place_issue":"Salem1","visa_type":"4","entries":"Single","issuing_city":"salem","visa_number":"1234","employer":"Test","receipt_number":"12345678","case_type":"test","receipt_date":"2017-10-30","notice_date":"2017-10-30","petitioner":"Sample","beneficiary":"ttttt","notice_type":"formal","description":"test"};*/
  }
 onFileChange(event){
       let files = event.target.files; 
       var reader = new FileReader();

      reader.onload = (event:any) => {
        //this.fileToUpload =  event.target.result;
      }
       //this.addPassportDetails(files);
        reader.readAsDataURL(event.target.files[0]);
  }
getVisaType(){
    //this.editMode = false;
     this.workpermitService.getSubCategory(2)
            .subscribe(
                data => {
                   // console.log(data);
                 this.visaTypeList = data;
                }
             );
  }

getWorkpermitType(){
  	//this.editMode = false;
  	 this.workpermitService.getSubCategory(3)
            .subscribe(
                data => {
                 //   console.log(data);
                 this.WPTypeList = data;
                }
             );
  }

  

   addWorkpermitDetails(WorkpermitInfo, files){
    //console.log(JSON.stringify(WorkpermitInfo));
      this.loading = true;
    this.errors = []; // Clear error
     if (files.length > 0 && (!this.isValidFiles(files))) {
          this.uploadStatus.emit(false);
          this.loading = false;
          return;
      }     
    if (files.length > 0) {
           
            for (var j = 0; j < files.length; j++) {
                this.formData.append("file[]", files[j], files[j].name);
               
            }
            }
            this.formData.append("WorkpermitInfo", JSON.stringify(WorkpermitInfo));
  this.workpermitService.addWorkpermitDetails(this.formData)
            .subscribe(

                data => {
                    //console.log(data);
                  
                    if(data.status == "success")
                    {
                      this.toastyService.success({
                        title: '',
                        msg: data.message,
                        showClose: false});
                        this.loading = false;
                         setTimeout(()=>{   
                                    this.router.navigateByUrl('/emp/workpermit/self'); 
                                    
                                },1000);
                    }
                    else
                    {
                      this.loading = false;
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
