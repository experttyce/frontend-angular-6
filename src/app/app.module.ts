import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule }    from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard} from './shared/guards';
import { AuthenticationService, UserService } from './shared/services';
import { JwtInterceptor} from './helpers/jwt.interceptor';
import { ErrorInterceptor} from './helpers/error.interceptor';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AlertComponent } from './shared/directives/alert.component';
import { AlertService } from './shared/services/alert.service';
import { LayoutModule } from './layout/layout.module';

import { PageNotFoundComponent }  from './page-not-found.component';





@NgModule( {
  declarations: [
    AppComponent,
    
    AlertComponent,
    PageNotFoundComponent,

    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    LayoutModule,    
    AppRoutingModule,
    RouterModule.forRoot([])
 

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