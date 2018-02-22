import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { PassportService } from '../../../_services/passport.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
	public passportInfo:any = {};
	loading = false;
    errors: Array<string> =[];
 // @Input() fileExt: string = "JPG, GIF, PNG, PDF";
  @Input() fileExt: string = "PDF";
  @Input() maxFiles: number = 5;
  @Input() maxSize: number = 5; // 5MB
  @Output() uploadStatus = new EventEmitter();
public formData: FormData = new FormData();
  constructor(private route: ActivatedRoute,private passportService: PassportService,
         private toastyService:ToastyService,private router: Router) { }

  ngOnInit() {
  	this.route.params.subscribe(params => {
     let id = params['id'];
        this.getPassportDetailsByID(id);
      });
  }

   getPassportDetailsByID(id){
  	//this.editMode = false;
  
    this.passportService.getPassportDetailsByID(id)
            .subscribe(
                data => {
                   // console.log(data);
                 this.passportInfo = data.PassportDetails;
                }
             );
   }

   updatePassportDetails(passportInfo)
   {
   	 	this.loading = true;

   // alert(JSON.stringify(passportInfo));
  //  console.log(JSON.stringify(I94Info));
  		this.passportService.updatePassportDetails(passportInfo)
            .subscribe(

                data => {
                    //console.log(data);
                  
                    if(data.status == "success")
                    {
                      this.toastyService.success({
                        title: '',
                        msg: data.message,
                        showClose: false});
                         setTimeout(()=>{   
                                   //  this.route.navigate(['emp/workpermit/self']); 
                                   this.router.navigateByUrl('/emp/passport');
                                },1000);
                    }
                    else
                    {
                      setTimeout(()=>{   
                                    
                                 
                                },1000);
                       this.toastyService.error({
                        title: '',
                        msg: data.message,
                        showClose: false});
                      
                        this.loading = false;
                    }
                }
                    
             );

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
  uploadPassportDocument(doc_id, files){
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
       this.formData.append("document_id", doc_id);
       this.formData.append("document_type", "Passport");
 
  this.passportService.uploadDocument(this.formData)
            .subscribe(

                data => {
                    //console.log(data);
                  
                    if(data.status == "success")
                    {
                      this.toastyService.success({
                        title: '',
                        msg: data.message,
                        showClose: false});
                         setTimeout(()=>{   
                                    this.router.navigateByUrl('/emp/passport'); 
                                    
                                },1000);
                    }
                    else
                    {
                      setTimeout(()=>{   
                                    
                                 
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
