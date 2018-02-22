import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
    public businessInfo:any = {};
	 propertyForm: FormGroup;
	 @Input() property;
  @Output() saveProperty = new EventEmitter<any>();
public assetsInfo: any ={};
 public yesnoList = [
    { value: 'Yes', display: 'Yes' },
    { value: 'No', display: 'No' },
    //{ value : 'Not Applicable', display : 'Not Applicable'}
];

  constructor(private fb: FormBuilder) { 
  this.businessInfo = {
      id: '',
      proprietor_name: '',
     business_nature:'',
     business_code:'',
     business_name:'',
     business_address:'',
     accounting_method:'',
     materially_participate:'',
     business_started:'',
     forms1099_payments:'',
     forms1099_required:'',
     state_purposes:'',
     gross_receipts_sales:'',
     advertising:'',
     car_truck_expenses:'',
     contract_labor:'',
     legal_professional_fees:'',
     office_expenses:'',
     rent_lease:'',
     meals_entertainment:'',
     repairs_maintenance:'',
     taxes_licenses:'',
     utilities:'',
     wages:'',
     business_travel_miles:'',
     others:'',
     fixedAssets : []
    };
    }

  ngOnInit() {
  	
  this.businessInfo = {
      id: this.property.id || null,
      proprietor_name: this.property.proprietor_name || '',
     business_nature:this.property.business_nature || '',
     business_code:this.property.business_code || '',
     business_name:this.property.business_name || '',
     business_address:this.property.business_address || '',
     accounting_method:this.property.accounting_method || '',
     materially_participate:this.property.materially_participate || '',
     business_started:this.property.business_started || '',
     forms1099_payments:this.property.forms1099_payments || '',
     forms1099_required:this.property.forms1099_required || '',
     state_purposes:this.property.state_purposes || '',
     gross_receipts_sales:this.property.gross_receipts_sales || '',
     advertising:this.property.advertising || '',
     car_truck_expenses:this.property.car_truck_expenses || '',
     contract_labor:this.property.contract_labor || '',
     legal_professional_fees:this.property.legal_professional_fees || '',
     office_expenses:this.property.office_expenses || '',
     rent_lease:this.property.rent_lease || '',
     meals_entertainment:this.property.meals_entertainment || '',
     repairs_maintenance:this.property.repairs_maintenance || '',
     taxes_licenses:this.property.taxes_licenses || '',
     utilities:this.property.utilities || '',
     wages:this.property.wages || '',
     business_travel_miles:this.property.business_travel_miles || '',
     others:this.property.others || '',
     fixedAssets : this.property.fixedAssets || []
//     fixedAssets : this.property.fixedAssets || [{"description":"test","purchase_date":"2018-02-07","asset_cost":12},{"description":"test","purchase_date":"2018-02-07","asset_cost":12}]
    };
  }
 
   onPropertyFormSubmit() {
    let dataModel = this.businessInfo;
    this.saveProperty.emit(dataModel);
  }

  addFixedAssets(assetsInfo)
  {
    alert(JSON.stringify(assetsInfo));


    if(this.isEmptyObject(assetsInfo))
    {
      return;
    }
   this.businessInfo.fixedAssets.push(assetsInfo);
        this.assetsInfo = {};
    
  }
  

   isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

}
