import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule }    from '@angular/forms';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthGuard} from './guards/auth.guard';
import { AuthenticationService, UserService } from './common/services';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import {ErrorInterceptor} from './helpers/error.interceptor';
//import { ToastrModule } from 'ng6-toastr-notifications';


import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
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
    RouterModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule

  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],


  bootstrap: [ AppComponent ]
} )
export class AppModule {
}