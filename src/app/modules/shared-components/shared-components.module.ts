import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
//import { SidebarComponent } from './../s';


@NgModule( {
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
   // SidebarComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    //SidebarComponent
  ]
} )
export class SharedComponentsModule {

}