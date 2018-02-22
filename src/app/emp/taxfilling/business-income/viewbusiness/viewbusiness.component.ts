import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-viewbusiness',
  templateUrl: './viewbusiness.component.html',
  styleUrls: ['./viewbusiness.component.scss']
})
export class ViewbusinessComponent implements OnInit {
 @Input() property;
   @Output() onCloseBusinessTab = new EventEmitter<any>();
   constructor(private fb: FormBuilder) { 

    }

  ngOnInit() {
  	
 
  }
 onClose() 
   {

             // close the tab
        this.onCloseBusinessTab.emit();
    }
}
