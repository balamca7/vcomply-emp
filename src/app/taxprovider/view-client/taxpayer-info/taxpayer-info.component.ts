import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { FileuploadService } from '../../../_services/fileupload.service';
import { TaxfillingService } from '../../../_services/taxfilling.service';


@Component({
  selector: 'app-taxpayer-info',
  templateUrl: './taxpayer-info.component.html',
  styleUrls: ['./taxpayer-info.component.scss']
})
export class TaxpayerInfoComponent implements OnInit {

	today: number = new Date().getFullYear();
  public yearSubmission : number;
	public generalInfo:any = { 'spouse' : {}, 'dependents':[]};
  public dependents:any = { };
  loading = false;

  errors: Array<string> =[];
  public formData: FormData = new FormData();
  public fileToUpload : any = {};

 constructor(private route: ActivatedRoute, public taxfilService: TaxfillingService,
         private toastyService:ToastyService,private router: Router,   private _fus: FileuploadService) {

 
          }

  ngOnInit() {
    this.yearSubmission = this.today-1;
    this.route.params.subscribe(params => {
      
    let id = params['id'];
       this.getGeneralInfoDetails(id);
      });
    
  }


  getGeneralInfoDetails(id){
    

      this.taxfilService.getTaxpayerInfoBypost({'id':id})
            .subscribe(

                data => {
                  this.generalInfo = data.Taxfileinfo;
                }
                    
             );
  }
/*
   saveGeneralInfoDetails(generalInfo, files){
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
             this.formData.append("generalInfo", JSON.stringify(generalInfo));

      this.taxfilService.saveGeneralInfoDetails(this.formData)
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
                         // this.getGeneralInfoDetails();
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
  }*/

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }
  addDepantant(dependents) {
    if(this.isEmptyObject(dependents))
    {
      return;
    }
    this.generalInfo.dependents.push(dependents);
    this.dependents = {};
  }

   deleteDepantant(index: number)
  {
    this.generalInfo.dependents.splice(index,1);
  }


  onFileChange(event){
       let files = event.target.files; 
       var reader = new FileReader();

      reader.onload = (event:any) => {
        this.fileToUpload =  event.target.result;
      }
      
        reader.readAsDataURL(event.target.files[0]);
  }


}
