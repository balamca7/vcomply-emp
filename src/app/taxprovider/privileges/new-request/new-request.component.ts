import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaxfillingService } from '../../../_services/taxfilling.service';
@Component({
  selector: 'new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss']
})
export class NewRequestComponent implements OnInit {
   loading = false;
	 propertyForm: FormGroup;
	 @Input() property;
  @Output() saveProperty = new EventEmitter<any>();
  public clientInfo : any = [];
  public privilegeInfo : any = {"client_id": "", "menuInfo" : []};
  public menuInfo : any = [];
  public requestList : any = [];
  constructor(public taxfilService: TaxfillingService,) { }

  ngOnInit() {
  	this.privilegeInfo = this.property.privilegeInfo;
  	this.clientInfo = this.property.clientInfo;
  }
   

  onPropertyFormSubmit() {
    let dataModel = this.privilegeInfo;
    this.saveProperty.emit(dataModel);
  }
}
