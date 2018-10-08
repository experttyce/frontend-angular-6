import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// Rutas

import { routing, AppRoutingProviders } from './app.routes';

// importar servicios

// importar componentes
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    HomeComponent,
    RegisterComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    routing
=======
    FormsModule,
    RouterModule,
    HttpModule,
    routing,
    SharedModule
>>>>>>> 98bb5d03852b57c3da04599a3bdb28c9a283841c
  ],
  providers: [
    AppRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
