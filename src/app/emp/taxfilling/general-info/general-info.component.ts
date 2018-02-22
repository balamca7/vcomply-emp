import { Component, OnInit, Input, Output, EventEmitter, HostListener, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';


import { FileuploadService } from '../../../_services/fileupload.service';
import { TaxfillingService } from '../../../_services/taxfilling.service';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss'],
})
export class GeneralInfoComponent implements OnInit,  AfterViewInit {
//@ViewChild('focus') vc : ElementRef;
@Input('edit') editMode = true;
	today: number = new Date().getFullYear();
  public yearSubmission : number;
	public generalInfo:any = { 'spouse' : {}, 'dependents':[], 'fileList' : [], 'status': ''};

  public dependents:any = { };
  loading = false;

  errors: Array<string> =[];
  public formData: FormData = new FormData();
  public fileToUpload : any = {};

 constructor(private route: ActivatedRoute, public taxfilService: TaxfillingService,
         private toastyService:ToastyService,private router: Router,   private _fus: FileuploadService) {

 
          }

  ngOnInit() {
  /*this.generalInfo = {
      "id": "",
      "user_id": "",
      "f_name": "",
      "l_name": "",
      "gender": "",
      "pan_no": "",
      "ssn_itin_no": "",
      "dob": "",
      "designation": "",
      "father_name": "",
      "marital_status": "",
      "filing_status": "",
      "permanent_home": "",
      "email_official": "",
      "email_personal": "",
      "contact_india": "",
      "contact_usa": "",
      "address_india": "",
      "address_usa": "",
      "perferred_country": "",
      "bankname_usa": "",
      "acctype_usa": "",
      "accno_usa": "",
      "ifsc_usa": "",
      "bankname_india": "",
      "acctype_india": "",
      "accno_india": "",
      "ifsc_india": "",
      "prev_employment": "",
      "payroll_type": "",
      "payroll_date": "",
      "status": "",
      "fileList": [],
      "dependents": [],
      "spouse": {
        "id": "",
        "f_name": "",
        "l_name": "",
        "gender": "",
        "pan_no": "",
        "ssn_itin_no": "",
        "dob": "",
        "designation": "",
        "email_official": "",
        "email_personal": "",
        "contact_india": "",
        "contact_usa": "",
        "relation_type": ""
      }
    };*/
    this.yearSubmission = this.today-1;
    this.getGeneralInfoDetails();
     document.body.scrollTop = 0;
  }
 ngAfterViewInit() {  
  
      /*if(this.editMode != false)          
      {
         this.vc.nativeElement.focus();
      }*/
    }

  getGeneralInfoDetails(){
    

      this.taxfilService.getGeneralInfoDetails()
            .subscribe(

                data => {
                  //alert(JSON.stringify(data.Taxfileinfo));
                  if(data.Taxfileinfo != null)
                  {
                    this.generalInfo = data.Taxfileinfo;
                    
                    if(this.generalInfo.status==2)
                    {
                        this.editMode = false;
                    }
                  }
                }
                    
             );
  }

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
                          this.getGeneralInfoDetails();
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
