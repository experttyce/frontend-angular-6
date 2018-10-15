import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';





@NgModule( {
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  declarations: [ 
    HomeComponent 
  ]
} )
export class HomeModule {}