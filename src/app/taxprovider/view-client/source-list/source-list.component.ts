import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
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
export class SourceListComponent implements OnInit {

 public yesnoList = [
    { value: 'Yes', display: 'Yes' },
    { value: 'No', display: 'No' },
    { value : 'Not Applicable', display : 'Not Applicable'}
];
  loading = false;
	 public sourceList = [];
	 public slData:any = {};
   errors: Array<string> =[];
  public formData: FormData = new FormData();
  public fileToUpload : any = {};

  constructor(private route: ActivatedRoute, public taxfilService: TaxfillingService,
         private toastyService:ToastyService,private router: Router, private _fus: FileuploadService) { }

  ngOnInit() {
  this.route.params.subscribe(params => {
    let id = params['id'];
       this.getSourceListDetails(id);
      });
  	
  }


getSourceListDetails(id){
    //this.editMode = false;
     this.taxfilService.getSourcelistByIdpost({'id':id})
            .subscribe(
                data => {
                    console.log(data);
                 this.slData = data;
                }
             );
  }


}
