import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../@theme/theme.module';
import { WorkpermitRoutingModule } from './workpermit-routing.module';

import { WorkpermitComponent } from './workpermit.component';

//import { SelfComponent } from './self/self.component';
import { FamilyComponent } from './family/family.component';
import { ExtensionComponent } from './extension/extension.component';

//import { PdfViewerComponent  } from 'ng2-pdf-viewer';

const components = [
  WorkpermitComponent,
  //SelfComponent,
  FamilyComponent,
  ExtensionComponent

];

@NgModule({
 declarations: [
    ...components,
    //PdfViewerComponent

  ],
  imports: [
    CommonModule ,
     ThemeModule,
      //PdfViewerModule,
    WorkpermitRoutingModule
  ],

  

})
export class WorkpermitModule { }
