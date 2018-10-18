import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    SweetAlert2Module.forRoot()
  ],
  declarations: [FooterComponent, NavigationComponent, TopnavbarComponent],
  exports: [FooterComponent, NavigationComponent, TopnavbarComponent]
})
export class SharedModule { }
