import { Component, Input, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { MessageService } from '../../../_services/message.service';
@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position: string = 'normal';
  stopCondition = false; 
  user: any;
  messageLink = '';
  unreadMsg = [];
  userMenu = [{ title: 'Profile' ,link: '/emp/auth/profile' }, { title: 'Log out',link: '/' }];
  notificationMenu = [
            { title: 'Document submited by Bala',link: '/taxprov/client-area' },
            { title: 'Document submited by Ezhil',link: '/taxprov/client-area' },
            { title: 'Query Responsed by Bala',link: '/taxprov/client-area' },
          ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private msgService : MessageService) {
  }

  ngOnInit() {
   
    
    this.userService.getUsers()
      .subscribe((users: any) => 
        {
            this.user = users;
            //alert(JSON.stringify(users)); 
            //this.user.user_type == 1
            if(this.user.user_type == 1)
              this.messageLink = "/emp/message";
            else if(this.user.user_type == 2)
              this.messageLink = "/hr/message";
            else if(this.user.user_type == 3)
              this.messageLink = "/taxprov/message";
        });
        this.getUnreadMessageList();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  getUnreadMessageList()
  {
      
     Observable.interval(10000)
      .takeWhile(() => !this.stopCondition)
      //.take(4)
      .subscribe(i => { 
        // This will be called every 10 seconds until `stopCondition` flag is set to true
        
        let currentUser = localStorage.getItem('currentUser');
        let usersdetails = JSON.parse(currentUser);
        //alert(JSON.stringify(usersdetails));
        if(currentUser == null)
        {
            this.stopCondition = true;
        }
        else{
        this.msgService.getUnreadMessageList()
            .subscribe(

                data => {
                
                  this.unreadMsg = data.MessageList;
                }
                    
             );
        }
    })
     
 
  }
}
