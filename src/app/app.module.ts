import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule }    from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthGuard} from './shared/guards';
import { AuthenticationService, UserService } from './shared/services';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import {ErrorInterceptor} from './helpers/error.interceptor';


import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './shared/directives/alert.component';
import { AlertService } from './shared/services/alert.service';







@NgModule( {
  declarations: [
    AppComponent,
    AlertComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule

  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    AlertService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],


  bootstrap: [ AppComponent ]
} )
export class AppModule {
}