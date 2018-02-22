/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';

@Component({
  selector: 'ngx-app',
  template: '<alert></alert><router-outlet  (activate)="onActivate($event, outlet)" #outlet><ng2-toasty [position]="\'bottom-left\'"></ng2-toasty></router-outlet>',
})
export class AppComponent implements OnInit {
    
  constructor(private analytics: AnalyticsService) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }

    onActivate(e, outlet){
    outlet.scrollTop = 0;
  }
}
