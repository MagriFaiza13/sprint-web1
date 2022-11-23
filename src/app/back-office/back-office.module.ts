import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackComponent } from './back/back.component';
import { NavBareComponent } from './nav-bare/nav-bare.component';
import { SideBareComponent } from './side-bare/side-bare.component';
import { ContentComponent } from './content/content.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    BackComponent,
    NavBareComponent,
    SideBareComponent,
    ContentComponent


  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    AppRoutingModule
  ],
  exports: [
    BackComponent
    
  ]
})
export class BackOfficeModule { }
