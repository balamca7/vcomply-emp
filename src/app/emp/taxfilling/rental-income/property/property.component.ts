import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
	public propertyInfo:any = {};
	 public propertyForm: any = {};
	 @Input() property;
  @Output() saveProperty = new EventEmitter<any>();
  public improveInfo: any ={};
  constructor(private fb: FormBuilder) { 
  this.propertyInfo = {
      id: '',
      address: '',
      actively_participate:'',
      sell_rented_property:'',
      description_property:'',
      no_of_days_rented:'',
      no_of_days_personal:'',
      no_of_vacant:'',
      gross_rents_received:'',
      advertising:'',
      cleaning:'',
      insurance:'',
      legal_professional_fees:'',
      management_fee:'',
      mortgage_interest:'',
      other_interest:'',
      repairs_maintenance:'',
      real_estate_taxes:'',
      utilities:'',
      rental_miles:'',
      others:'',
      cost_land:'',
      cost_building:'',
      constructed_date:'',
      rentedout_date:'',
      improvements :''
    };
    }

  ngOnInit() {
    //this.propertyInfo = this.property;
 

  this.propertyInfo = {
      id: this.property.id || null,
      address: this.property.address || '',
   	  actively_participate: this.property.actively_participate || '',
      sell_rented_property: this.property.sell_rented_property || '',
      description_property: this.property.description_property || '',
      no_of_days_rented: this.property.no_of_days_rented || '',
      no_of_days_personal: this.property.no_of_days_personal || '',
      no_of_vacant: this.property.no_of_vacant || '',
      gross_rents_received: this.property.gross_rents_received || '',
      advertising: this.property.advertising || '',
      cleaning: this.property.cleaning || '',
      insurance: this.property.insurance || '',
      legal_professional_fees: this.property.legal_professional_fees || '',
      management_fee: this.property.management_fee || '',
      mortgage_interest: this.property.mortgage_interest || '',
      other_interest: this.property.other_interest || '',
      repairs_maintenance: this.property.repairs_maintenance || '',
      real_estate_taxes: this.property.real_estate_taxes || '',
      utilities: this.property.utilities || '',
      rental_miles: this.property.rental_miles || '',
      others: this.property.others || '',
      cost_land: this.property.cost_land || '',
      cost_building: this.property.cost_building || '',
      constructed_date: this.property.constructed_date || '',
      rentedout_date: this.property.rentedout_date || '',
      improvements:this.property.improvements || [],
      //improvements:[{"improvement":"test","amount":100}],
    };
  }
 
   onPropertyFormSubmit() {
    let dataModel = this.propertyInfo;
    this.saveProperty.emit(dataModel);
  }

  addImprovements(improveInfo)
  {
    //alert(JSON.stringify(improveInfo));


    if(this.isEmptyObject(improveInfo))
    {
      return;
    }
   this.propertyInfo.improvements.push(improveInfo);
        this.improveInfo = {};
    
  }
  

   isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }
}
