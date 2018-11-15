import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './access/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    
  ],
  declarations: [  LoginComponent, RegisterComponent, ForgotComponent],
  providers: [  ]
})
export class AuthenticationModule {}