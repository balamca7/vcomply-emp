import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-viewproperty',
  templateUrl: './viewproperty.component.html',
  styleUrls: ['./viewproperty.component.scss']
})
export class ViewpropertyComponent implements OnInit {
 
  propertyForm: FormGroup;
  @Input() property;
   @Output() onCloseTab = new EventEmitter<any>();
  constructor(private fb: FormBuilder) { 
  
    }

  ngOnInit() {
 
  }

  onClose() 
   {
             // close the tab
        this.onCloseTab.emit();
    }
}
