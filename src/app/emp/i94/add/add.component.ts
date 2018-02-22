import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { I94Service } from '../../../_services/i94.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

	public I94Info:any = {};
	// @Input() fileExt: string = "JPG, GIF, PNG, PDF";
   @Input() fileExt: string = "PDF";
  @Input() maxFiles: number = 5;
  @Input() maxSize: number = 5; // 5MB
  @Output() uploadStatus = new EventEmitter();
  errors: Array<string> =[];
public formData: FormData = new FormData();

	loading = false;
  constructor(private route: ActivatedRoute, private i94Service: I94Service,
         private toastyService:ToastyService,private router: Router) { }

  ngOnInit() {
   /* this.I94Info ={
"record_number":"qeqweqwe",
"admit_date":"2017-11-27",
"family_name":"sdffdsfasd",
"f_name":"sdfasf",
"dob":"2017-10-10",
"passport_number":"asdfsadfsdaf",
"issued_country":"india",
"entry_date":"2017-12-10",
"class_admission":"sadfsadfsadf",
};*/
  }

onFileChange(event){
       let files = event.target.files; 
       var reader = new FileReader();

      reader.onload = (event:any) => {
        //this.fileToUpload =  event.target.result;
      }
      
        reader.readAsDataURL(event.target.files[0]);
  }

   addI94Details(I94Info, files){

    //console.log(JSON.stringify(I94Info));
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
             this.formData.append("I94Info", JSON.stringify(I94Info));
  this.i94Service.addI94Details(this.formData)
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
                                    this.router.navigateByUrl('/emp/i94'); 
                                    
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
