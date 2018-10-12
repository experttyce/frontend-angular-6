import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


//importando servicios
import { AlertService} from '../app/common/services/alert.service';
import { AuthenticationService } from '../app/common/services/authentication.service';

import { AppComponent } from './app.component';
import { ErrorComponent } from './common/error/error.component';
import { SharedModule } from './modules/shared-components/shared-components.module';

import { NgxPopper } from 'angular-popper';
import { HeaderComponent } from './common/layout/header/header.component';




@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    NgxPopper
  ],
  providers: [

    AlertService,
    AuthenticationService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
