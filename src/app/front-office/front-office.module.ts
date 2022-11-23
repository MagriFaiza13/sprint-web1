import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { FrontComponent } from './front/front.component';


@NgModule({
  declarations: [
    FrontComponent
  ],
  imports: [
    CommonModule,
    FrontOfficeRoutingModule
  ],
  exports :[
    FrontComponent
  ]
})
export class FrontOfficeModule { }
