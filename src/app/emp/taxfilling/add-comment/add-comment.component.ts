import { Component, OnInit, Input, Output, EventEmitter, HostListener,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { TaxfillingService } from '../../../_services/taxfilling.service';
import { FileuploadService } from '../../../_services/fileupload.service';
@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit, AfterViewInit {
@Input('edit') editMode = true;
today: number = new Date().getFullYear()-1;
	loading = false;
	public commentInfo : any = {};
//@ViewChild('focus') vc : ElementRef;

   constructor(private route: ActivatedRoute, public taxfilService: TaxfillingService,
         private toastyService:ToastyService,private router: Router,   private _fus: FileuploadService) { }


  ngOnInit() {
      this.getSubmitformInfo();
      document.body.scrollTop = 0;
  }
  ngAfterViewInit() {            
        // this.vc.nativeElement.focus();
    }
    isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
    }
   getSubmitformInfo(){
      this.taxfilService.getSubmitformInfo()
            .subscribe(

                data => {
                if(!this.isEmptyObject(data))
                  {
                  this.commentInfo = data;
                  if(this.commentInfo.status == 2)
                   {
                      this.editMode = false;
                   }
                   }
                }
             );
  }
  saveAddcommentsDetails(commentInfo)
  {
  	 //alert(JSON.stringify(commentInfo));
     this.loading = true;
       this.taxfilService.addSubmitformInfo(commentInfo)
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
                           this.getSubmitformInfo();
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

  submitTaxFillingFormDetails(commentInfo)
  {
      var response = confirm("Are you sure? you want to submit the form? \nOnce you submit doesn't change the form details.");
      if(response)
      {
       // alert(JSON.stringify(commentInfo));
         //finalSubmitformInfo

     this.loading = true;
       this.taxfilService.finalSubmitformInfo(commentInfo)
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
                           this.getSubmitformInfo();
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
        else
      {
      return; 
      }
      
     
  }
}
