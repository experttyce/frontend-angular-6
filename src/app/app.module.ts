import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


import { Ng2Webstorage} from 'ngx-webstorage';


import { AlertService} from '../app/common/services/alert.service';
import { AuthenticationService } from '../app/common/services/authentication.service';
import { HttpService } from '../app/common/services/http.service';

import { AppComponent } from './app.component';
import { ErrorComponent } from './common/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { SharedModule } from './modules/shared-components/shared-components.module';

import { NgxPopper } from 'angular-popper';
import { HeaderComponent } from './common/layout/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    RegisterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    NgxPopper,
    
    Ng2Webstorage
  ],
  providers: [

    AlertService,
    AuthenticationService,
    HttpService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
