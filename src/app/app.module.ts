import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Rutas

import { AppRoutingModule } from './app-routing.module';
import { routing, AppRoutingProviders } from './app.routes';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar/sidebar.module';

// importar componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
