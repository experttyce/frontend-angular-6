import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';


import { ErrorModule } from './common/error/error.module';
import { HeaderModule } from './modules/layout/header/header.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';








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
  providers: [ ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}