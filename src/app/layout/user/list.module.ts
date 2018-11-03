import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';
import { ListRoutingModule } from './list-routing.module';
import { RouterModule } from '@angular/router';




@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    ListRoutingModule,
    ReactiveFormsModule,
    RouterModule
 
  ],
  declarations: [
    ListComponent
  ]
} )
export class ListModule {}