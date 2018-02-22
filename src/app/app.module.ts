import * as ngCore from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CoreModule } from './@core/core.module';
import {AccordionModule} from "ngx-accordion";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabModule } from 'angular-tabs-component';

import { customHttpProvider } from './_helper/custom-http';
import { AlertComponent } from './_directive/alert.component';

import { AuthGuard, HrauthGuard, TaxprovauthGuard } from './_guards/index';

import { AlertService, AuthenticationService, ProfileService,WorkpermitService,UserService,SubscribeService,I94Service,PassportService,FileuploadService,TaxfillingService, MessageService } from './_services/index';
/*import { AlertService } from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';
import { ProfileService } from './_services/profile.service';
import { WorkpermitService } from './_services/workpermit.service';
import { UserService } from './_services/user.service';
import { SubscribeService } from './_services/subscribe.service';
import { I94Service } from './_services/i94.service';
import { PassportService } from './_services/passport.service';

import { FileuploadService } from './_services/fileupload.service';
import { TaxfillingService } from './_services/taxfilling.service';*/

import { LoginComponent } from './login/login.component';
//import { PagesModule } from './pages/pages.module';

//import { AccountModule } from './account/account.module';
//import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {ToastyModule} from 'ng2-toasty';

import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { HomeComponent } from './home/home.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FilterPipe } from './_pipe/filter.pipe';
 

//import { DynamicTabsDirective } from './_directive/dynamic-tabs.directive';

//import { PdfViewerComponent  } from 'ng2-pdf-viewer';



//declare let paypal:any; 
//export { paypal };
//export const PayPalButtonModule = paypal.Button.driver('angular2', ngCore);

@NgModule({
  
  imports: [
    BrowserModule,
   // PdfViewerModule,
    BrowserAnimationsModule,
    HttpModule,
    AccordionModule,
    AppRoutingModule,
    FormsModule, 
//    PagesModule,
//AccountModule,
//PayPalButtonModule,
TabModule,
  
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    ToastyModule.forRoot()
  ],
  declarations: [
                AppComponent,
                AlertComponent,
                LoginComponent,
                HomeComponent,
                SubscribeComponent,
              //  FilterPipe,
              
               
              //  DynamicTabsDirective,
             //   PdfViewerComponent,
                
               
                
                ],
  bootstrap: [AppComponent],
 // exports: [FilterPipe],
//   exports : [ PayPalButtonModule],
  providers: [
        customHttpProvider,
        AuthGuard,
        HrauthGuard,
        TaxprovauthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        ProfileService,
        WorkpermitService,
        SubscribeService,
        I94Service,
        PassportService,
        FileuploadService,
        TaxfillingService,
        MessageService,
    //{ provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {
}

