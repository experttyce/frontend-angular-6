import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { SharedModule } from './shared/shared.module';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {AdminLayoutComponent} from './shared/layouts/admin-layout/admin-layout.component';


@NgModule({
  declarations: [AppComponent, AuthLayoutComponent, AdminLayoutComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SharedModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
