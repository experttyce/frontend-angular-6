import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Rutas

// import { AppRoutingModule } from './app-routing.module';
import { routing, AppRoutingProviders } from './app.routes';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar/sidebar.module';

// importar servicios




// importar componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
=======

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
>>>>>>> 163a3a88a4324f6f54cd8debb93e59d662a254ce

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
    ErrorComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   //  AppRoutingModule,
    RouterModule,
    HttpModule,
    routing,
    NavbarModule,
    FooterModule,
    SidebarModule
  ],
  providers: [
    AppRoutingProviders
  ],
=======
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
>>>>>>> 163a3a88a4324f6f54cd8debb93e59d662a254ce
  bootstrap: [AppComponent]
})
export class AppModule { }
