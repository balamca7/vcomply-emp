import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
@Component({
  selector: 'ngx-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {

  modalHeader: string;
  modalContent: string = `bala`;
	public stateInfo:any = {};
  constructor(private activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.close();
  }

  addStatedetails(stateInfo)
  {
  	alert(JSON.stringify(stateInfo));
  	this.closeModal();
  }
}
