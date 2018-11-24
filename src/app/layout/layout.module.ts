import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';




@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LayoutRoutingModule,
        CollapseModule
        
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, HomeComponent, CalculatorComponent],
    exports:[LayoutComponent, SidebarComponent, HeaderComponent, HomeComponent],
    bootstrap: [ LayoutComponent ]
})
export class LayoutModule {}