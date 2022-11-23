import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FrontOfficeModule } from '../assets/front-office/front-office.module';
import { BackOfficeModule } from './back-office/back-office.module';


@NgModule({
  declarations: [
    AppComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BackOfficeModule,
    FrontOfficeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
