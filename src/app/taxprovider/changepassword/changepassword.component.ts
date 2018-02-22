import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ToastyService, ToastyConfig, ToastyComponent, ToastOptions, ToastData} from 'ng2-toasty';
import { Directive, forwardRef, 
           Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
  import { NG_VALIDATORS,Validator,
           Validators,AbstractControl,ValidatorFn } from '@angular/forms';
          import { EqualValidator } from '../../_directive/equal-validator.directive';
          import { User } from '../../_models/user.interface';
          import { ProfileService } from '../../_services/profile.service';
@Component({
	moduleId: module.id,
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss'],
  
})
export class ChangepasswordComponent implements OnInit {
public user: User;
 @Input() oldpassword='';
 @Input() newpassword='';
  @Input() confirmPassword='';
public loading = false;
  constructor(private route: ActivatedRoute, private profileService: ProfileService,
         private toastyService:ToastyService,private router: Router) {

          }
  ngOnInit() {
  	this.user = {
		oldpassword: '',    
      newpassword: '',
      confirmPassword: ''
    }
  }
changePassword(model: User, isValid: boolean) {
    // call API to save customer
   // alert(JSON.stringify(model));
    //console.log(model, isValid);
    this.loading = true;
      this.profileService.changePassword(model)
            .subscribe(

                data => {
                    //console.log(data);
                 
                    if(data.status == "success")
                    {
                      this.toastyService.success({
                        title: '',
                        msg: data.message,
                        showClose: false});
                         setTimeout(()=>{   
                                  this.user = {
												oldpassword: '',    
										      newpassword: '',
										      confirmPassword: ''
										    }
										     this.loading = false;
                                },1000);
                    }
                    else
                    {
                       this.loading = false;
                       this.toastyService.error({
                        title: '',
                        msg: data.message,
                        showClose: false});
                      
                       
                    }
                }
                    
             );
  }
}
