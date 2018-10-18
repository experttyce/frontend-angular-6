import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { SharedModule } from './shared/shared.module';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {AdminLayoutComponent} from './shared/layouts/admin-layout/admin-layout.component';
import {AuthGuard} from './guards/auth.guard';
import {AuthService, UserService} from './services';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import {ErrorInterceptor} from './helpers/error.interceptor';


@NgModule({
  declarations: [AppComponent, AuthLayoutComponent, AdminLayoutComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    SharedModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
