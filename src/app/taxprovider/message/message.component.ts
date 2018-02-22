import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';
import { MessageService } from '../../_services/message.service';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
	public messageInfo:any = [];

  selectedAll: any;
  constructor(private route: ActivatedRoute, public msgService: MessageService,
         private toastyService:ToastyService,private router: Router) { }

  ngOnInit() {
  	/*this.messageInfo = [{'id': 1,'name' : "Alexander Pierce", 'subject':' Trying to find a solution to this problem...', 'time' :'5 mins ago'},
  	{'id': 2,'name' : "Alexander Pierce", 'subject':' Trying to find a solution to this problem...', 'time' :'5 mins ago'},
  	{'id': 3,'name' : "Alexander Pierce", 'subject':' Trying to find a solution to this problem...', 'time' :'5 mins ago'},
  	{'id': 4,'name' : "Alexander Pierce", 'subject':' Trying to find a solution to this problem...', 'time' :'5 mins ago'},
  	{'id': 5,'name' : "Alexander Pierce", 'subject':' Trying to find a solution to this problem...', 'time' :'5 mins ago'},
  	{'id': 6,'name' : "Alexander Pierce", 'subject':' Trying to find a solution to this problem...', 'time' :'5 mins ago'},
  	];*/
    this.getMessageList();
  }

   selectAll() {
    for (var i = 0; i < this.messageInfo.length; i++) {
      this.messageInfo[i].selected = this.selectedAll;
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.messageInfo.every(function(item:any) {
        return item.selected == true;
      })
  }

  getMessageList()
  {
     this.msgService.getMessageList()
            .subscribe(

                data => {
                  this.messageInfo = data.MessageList;
                }
                    
             );
 
  }

}
