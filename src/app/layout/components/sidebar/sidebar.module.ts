import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import {SidebarComponent} from '../sidebar/sidebar.component'



@NgModule( {
  imports: [
    CommonModule,
    RouterModule
    
  ],
  declarations: [ SidebarComponent ],
  exports: [ SidebarComponent ]
} )
export class SidebarModule {}