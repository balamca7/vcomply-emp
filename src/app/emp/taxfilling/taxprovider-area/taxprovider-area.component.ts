import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import {TabsComponent} from '../tabs/tabs.component';
@Component({
  selector: 'app-taxprovider-area',
  templateUrl: './taxprovider-area.component.html',
  styleUrls: ['./taxprovider-area.component.scss']
})
export class TaxproviderAreaComponent implements OnInit {
  title: String;
  names: any;
  selectedAll: any;
  constructor() { this.title = "Select all/Deselect all checkbox - Angular 2";
    this.names = [
      { name: 'Prashobh', selected: false },
      { name: 'Abraham', selected: false },
      { name: 'Anil', selected: false },
      { name: 'Sam', selected: false },
      { name: 'Natasha', selected: false },
      { name: 'Marry', selected: false },
      { name: 'Zian', selected: false },
      { name: 'karan', selected: false },
    ]}

  ngOnInit() {
  }

  selectAll() {
    for (var i = 0; i < this.names.length; i++) {
      this.names[i].selected = this.selectedAll;
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.names.every(function(item:any) {
        return item.selected == true;
      })
  }
}
