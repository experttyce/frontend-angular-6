import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ForgotComponent } from './forgot/forgot.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    SweetAlert2Module
  ],
  declarations: [ForgotComponent, SigninComponent, SignupComponent],
  providers: [  ]
})
export class AuthenticationModule {}
