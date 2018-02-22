import { Component, OnInit, Input, Output, EventEmitter, HostListener,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { TaxfillingService } from '../../../_services/taxfilling.service';
import { FileuploadService } from '../../../_services/fileupload.service';

@Component({
  selector: 'app-source-list',
  templateUrl: './source-list.component.html',
  styleUrls: ['./source-list.component.scss']
})
export class SourceListComponent implements OnInit, AfterViewInit  {
//@ViewChild('focus') vc : ElementRef;
@Input('edit') editMode = true;
 public yesnoList = [
    { value: 'Yes', display: 'Yes' },
    { value: 'No', display: 'No' },
    { value : 'Not Applicable', display : 'Not Applicable'}
];
  loading = false;
	 public sourceList = [];
	 public slData:any = {"fileList" : []};
   errors: Array<string> =[];
  public formData: FormData = new FormData();
  public fileToUpload : any = {};
  public maxFiles;
  constructor(private route: ActivatedRoute, public taxfilService: TaxfillingService,
         private toastyService:ToastyService,private router: Router, private _fus: FileuploadService) { this.maxFiles = this._fus.maxFiles; }

  ngOnInit() {
    document.body.scrollTop = 0; 
  	this.getSourceListDetails();
      
  }
  ngAfterViewInit() {            
         // this.vc.nativeElement.focus();
    }
 isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }
getSourceListDetails(){
    //this.editMode = false;
     this.taxfilService.getSourceListDetails()
            .subscribe(
                data => {
                  //  console.log(data);
                 // alert(JSON.stringify(data));
                  if(!this.isEmptyObject(data))
                  {
                     this.slData = data;
                     if(this.slData.status == 2)
                     {
                         this.editMode = false;
                      } 
                  }
                  
                 
                }
             );
  }

onFileChange(event){
       let files = event.target.files; 
       var reader = new FileReader();

      reader.onload = (event:any) => {
        this.fileToUpload =  event.target.result;
      }
      
        reader.readAsDataURL(event.target.files[0]);
  }
   addSourceListDetails(sourceInfo, files){
     //console.log(JSON.stringify(I94Info));
      this.loading = true;
      this.errors = []; // Clear error
     if (files.length > 0 && (!this._fus.isValidFiles(files))) {
          this._fus.uploadStatus.emit(false);
          this.loading = false;
          return;
      }  
     
      
    if (files.length > 0) {
            for (var j = 0; j < files.length; j++) {
                this.formData.append("file[]", files[j], files[j].name);
            }
     }
     else{
      this.formData = new FormData();
     }
             this.formData.append("sourceInfo", JSON.stringify(sourceInfo));

   
      this.taxfilService.addSourceListDetails(this.formData)
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
                         this.getSourceListDetails();
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
