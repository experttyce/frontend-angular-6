import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Paquete para el almacenamiento web
import { Ng2Webstorage} from 'ngx-webstorage';

// Rutas

import { routing, AppRoutingProviders } from './app.routes';

// importar servicios

import { AlertService} from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { HttpService } from './services/http.service';

// importar componentes
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from './shared/shared.module';
import { LogComponent} from './log/log.component';
import { NgxPopper } from 'angular-popper';
import { AlertComponent } from './directivas/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    RegisterComponent,
    LogComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    routing,
    SharedModule,
    NgxPopper,
    HttpClientModule,
    Ng2Webstorage
  ],
  providers: [
    AppRoutingProviders,
    AlertService,
    AuthenticationService,
    HttpService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
