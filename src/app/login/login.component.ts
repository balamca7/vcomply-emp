import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../_services/alert.service';
import { AuthenticationService } from '../_services/authentication.service';
import { NbMenuItem } from '@nebular/theme';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
   styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService, private toastyService:ToastyService) { }

    ngOnInit() {
      
        // reset login status
        this.authenticationService.logout();
        this.router.navigate(['/login']);
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
       // console.log('this.returnUrl:'+this.returnUrl);

       this.model = {username:'taxprov', password:'123'};
    }

    login() {
        this.loading = true;
        //localStorage.removeItem('currentUser');
        //localStorage.clear();
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(

                data => {
                  //  console.log(data.message);
                   
                   //  this.alertService.success(data.message);
                    if(data.status == 'success')
                    {
                         this.toastyService.success({
                         title: '',
                            msg: data.message,
                            showClose: false});
                          //localStorage.setItem('currentUser', JSON.stringify(data));  
                          //console.log(localStorage.getItem('currentUser'));
                          this.router.navigate([data.redirectUrl]); 

                          setTimeout(()=>{   
                                 
                                //location.reload();
                            },1000);
                        
                      //

                    }
                    else
                    {
                        this.toastyService.error({
            title: '',
            msg: data.message,
            showClose: false});
                        //alert(data.message);
                        //this.alertService.error(data.message);
                        this.loading = false;
                    }
                },
                error => {
                    //console.log('error:'+error);
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
