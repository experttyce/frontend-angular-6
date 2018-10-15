import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';


import { ErrorModule } from './modules/error/error.module';
import { HeaderModule } from './modules/layout/header/header.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';



import { AuthenticationService } from './common/services/authentication.service';




@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeaderModule,
    ErrorModule,
    RouterModule,
    AppRoutingModule,
    HttpModule


  ],
  providers: [
 
    AuthenticationService ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}