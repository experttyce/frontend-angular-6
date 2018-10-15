import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { RouterModule } from '@angular/router'



@NgModule( {
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
    
  ],
  declarations: [ 
    RegisterComponent  ]
} )
export class RegisterModule {}